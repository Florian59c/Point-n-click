import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import User, { LoginInput, UsersInput, hashPassword, verifyPassword } from '../entity/User';
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
    async createUser(@Arg("data") { pseudo, email, password }: UsersInput): Promise<User> {
        const bestScore = 86400;
        const hashedPassword = await hashPassword(password);
        return await datasource.getRepository(User).save({ pseudo, email, hashedPassword, bestScore });
    }

    @Mutation(() => Boolean)
    async login(@Arg("data") { email, password }: LoginInput): Promise<boolean> {
        const user = await datasource.getRepository(User).findOneBy({ email });
        console.log(user);

        // si l'utilisateur n'existe pas ou si son mdp n'est pas verifié
        if (user === null || !(await verifyPassword(password, user.hashedPassword))) {
            throw new ApolloError("L'utilisateur n'existe pas", "INVALID_CREDS");
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