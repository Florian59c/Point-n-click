import { Resolver, Query, Mutation, Arg, Ctx, Authorized } from 'type-graphql';
import User, { LoginInput, UpdateUserBestScoreInput, UsersInput, hashPassword, verifyPassword } from '../entity/User';
import datasource from '../db';
import { ApolloError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import { env } from '../env';
import { ContextType } from '..';

@Resolver()
export class UserResolver {
    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        const getUser = await datasource.getRepository(User).find();
        return getUser;
    };

    @Query(() => [User])
    async get10BestUsers(): Promise<User[]> {
        const get10BestUsers = (await datasource.getRepository(User)
            .find({ order: { bestScore: "ASC" }, take: 10 }));
        return get10BestUsers;
    };

    @Mutation(() => User)
    async createUser(@Arg("data") { pseudo, email, password }: UsersInput): Promise<User> {
        const bestScore = 86400;
        const hashedPassword = await hashPassword(password);
        return await datasource.getRepository(User).save({ pseudo, email, hashedPassword, bestScore });
    }

    @Mutation(() => String)
    async login(@Arg("data") { email, password }: LoginInput, @Ctx() { res }: ContextType): Promise<string> {
        const user = await datasource.getRepository(User).findOneBy({ email });
        console.log(user);

        // si l'utilisateur n'existe pas ou si son mdp n'est pas verifié
        if (user === null || !(await verifyPassword(password, user.hashedPassword))) {
            throw new ApolloError("L'utilisateur n'existe pas", "INVALID_CREDS");
        }
        const token = jwt.sign({ userId: user.id }, env.JWT_PRIVATE_KEY);
        // httpOnly est une option qui permet de resoudre une faille de securité dans laquel le jwt est exposé en js
        // secure empeche au navigateur d'interpreter un cookie si l'application n'est pas en https
        // expire permet de mettre une date d'expiration au token
        res.cookie('token', token, { httpOnly: true, secure: env.NODE_ENV === "production" })
        return token;
    }

    @Mutation(() => Boolean)
    async logout(@Ctx() { res }: ContextType): Promise<boolean> {
        res.clearCookie("token");
        return true;
    }

    @Authorized()
    @Query(() => User)
    async profile(@Ctx() { currentUser }: ContextType): Promise<User> {
        // si currentUser est undefined
        if (typeof currentUser !== 'object') {
            throw new ApolloError("Vous devez être connecté");
        }
        return currentUser;
    };

    @Mutation(() => Boolean)
    async updateUserBestScore(@Arg("data") { userId, newBestScore }: UpdateUserBestScoreInput): Promise<Boolean> {
        const result = await datasource.getRepository(User).update({ id: userId }, { bestScore: newBestScore })
        if (result.affected === 0) {
            throw new ApolloError("L'utilisateur n'a pas été trouvé", "NOT_FOUND");
        }
        return true;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg("userId") userId: number): Promise<Boolean> {
        const result = await datasource.getRepository(User).delete(userId);
        if (result.affected === 0) {
            throw new ApolloError("L'utilisateur n'a pas été trouvé", "NOT_FOUND");
        }
        return true;
    }
};