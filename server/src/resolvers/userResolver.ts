import { Resolver, Query } from 'type-graphql';
import User from '../entity/User';
import datasource from '../db';
// import { ApolloError } from 'apollo-server';

@Resolver()
export class UserResolver {
    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        const getUser = await datasource.getRepository(User).find();
        return getUser;
        // try {
        //     const getUser = await datasource.getRepository(User).find();
        //     return getUser;
        // } catch (error) {
        //     console.error(error);
        //     throw new ApolloError("erreur lors de la l'affichage des utilisateurs");
        // }
    };
};