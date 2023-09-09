import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Game, { GamesInput, VerifyGameCodeInput } from '../entity/Game';
import { ApolloError } from 'apollo-server';
import datasource from '../db';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    async getGames(): Promise<Game[]> {
        const getGame = await datasource.getRepository(Game).find();
        return getGame;
    };

    @Mutation(() => Boolean)
    async verifyGameCode(@Arg("data") { name, psw }: VerifyGameCodeInput): Promise<boolean> {
        const findGame = await datasource.getRepository(Game).findOneBy({ name });
        console.log(findGame?.code);
        if (findGame !== null) {
            if (findGame?.code === psw) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new ApolloError("Le jeu n'existe pas", "INVALID_CREDS");
        }
    };

    @Mutation(() => Game)
    async createGame(@Arg("data") data: GamesInput): Promise<Game> {
        return await datasource.getRepository(Game).save(data);
    }

    @Mutation(() => Boolean)
    async deleteGame(@Arg("gameId") gameId: number): Promise<Boolean> {
        const result = await datasource.getRepository(Game).delete(gameId);
        if (result.affected === 0) {
            throw new ApolloError("L'utilisateur n'a pas été trouvé", "NOT_FOUND");
        }
        return true;
    }
};