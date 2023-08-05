import "reflect-metadata";
// cherche le code correspondant au package express
import express from 'express';
import cors from 'cors';
import datasource from './db';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UserResolver } from "./resolvers/userResolver";
import { buildSchema } from "type-graphql";
import { GameResolver } from "./resolvers/gameResolver";
import jwt from 'jsonwebtoken';
import { env } from "./env";
import User from "./entity/User";
import cookie from "cookie";

// https://www.apollographql.com/docs/apollo-server/v3/getting-started/

const app = express();

// permet d'acceder au donnees envoyer par le client dans le corp de la requete sur le gestionnaire de routes
// sans ça, req.body sera forcement undefined
app.use(express.json());
// utilisation de cors pour eviter les problèmes de liaison avec le front lié aux navigateurs
app.use(cors());

export interface JWTPayload {
    userId: number;
}

export interface ContextType {
    req: express.Request;
    res: express.Response;
    currentUser?: User;
}

// attente que la bdd soit initialiser avent que le serveur commence à écouter sur un port
async function start(): Promise<void> {

    await datasource.initialize();

    const schema = await buildSchema({
        resolvers: [UserResolver, GameResolver],
        // on recupere le token
        authChecker: async ({ context }: { context: ContextType }) => {
            const { req: { headers } } = context;
            const tokenInAuthHeader = headers.authorization?.split(' ')[1];
            const tokenInCookie = cookie.parse(headers.cookie ?? '').token;
            const token = tokenInAuthHeader ?? tokenInCookie;
            // verify si le token est bien defini
            if (typeof token === 'string') {
                // on verifie si il est pas valide (qu'il n'a pas été modifié par quelqu'un)
                const decoded = jwt.verify(token, env.JWT_PRIVATE_KEY) as JWTPayload;
                // si il est bien décodé
                if (typeof decoded === "object") {
                    // on recupere les information de l'utilisateur conecté
                    const currentUser = await datasource.getRepository(User).findOneBy({ id: decoded.userId });
                    // si on a bien recupere le current user, on l'insere dans le contexte
                    if (currentUser !== null) {
                        context.currentUser = currentUser;
                    }
                    return true;
                }
            }
            return false;
        },
    });

    const server = new ApolloServer({
        schema,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
        context: ({ req, res }) => ({ req, res }),
        cors: {
            origin: env.CORS_ALLOWED_ORIGINS.split(","),
            credentials: true,
        }
    });

    await server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });

    // le port sur lequel on va écouter
    app.listen(4001, () => {
        console.log('le serveur est prêt');
    });
}

start().catch(console.error);