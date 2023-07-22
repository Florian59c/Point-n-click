import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import User, { UsersInput } from '../entity/User';
import datasource from '../db';
import { ApolloError } from 'apollo-server';

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
    async createUser(@Arg("data") data: UsersInput): Promise<User> {
        return await datasource.getRepository(User).save(data);
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