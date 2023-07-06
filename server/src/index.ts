import "reflect-metadata";
// cherche le code correspondant au package express
import express from 'express';
// on appel le controller users
import usersController from './controller/users';
import cors from 'cors';
import datasource from './db';
import { ApolloServer, gql } from 'apollo-server';
import User from './entity/User';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UserResolver } from "./resolvers/userResolver";
import { buildSchema } from "type-graphql";

// https://www.apollographql.com/docs/apollo-server/v3/getting-started/

// const typeDefs = gql`
//   type User {
//     id: Int
//     pseudo: String
//   }
//   type Query {
//     getUsers: [User]
//   }
// `;

// const resolvers = {
//     Query: {
//         getUsers: async () => {
//             const getUser = await datasource.getRepository(User).find();
//             return getUser;
//         },
//     },
// };








const app = express();

// permet d'acceder au donnees envoyer par le client dans le corp de la requete sur le gestionnaire de routes
// sans ça, req.body sera forcement undefined
app.use(express.json());
// utilisation de cors pour eviter les problèmes de liaison avec le front lié aux navigateurs
app.use(cors());

app.get('/hello', (req, res) => {
    console.log('new request');
    res.send('salut');
});

app.post('/users', usersController.create);
// app.get('/users', usersController.getAll);
app.delete('/users/:id', usersController.deleteOne);
// app.get('/users', usersController.getPseudoStartWithF);

// attente que la bdd soit initialiser avent que le serveur commence à écouter sur un port
async function start(): Promise<void> {
    await datasource.initialize();

    const schema = await buildSchema({
        resolvers: [UserResolver],
    });

    const server = new ApolloServer({
        schema,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
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