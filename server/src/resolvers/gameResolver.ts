import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Game, { GamesInput } from '../entity/Game';
import datasource from '../db';
import { ApolloError } from 'apollo-server';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    async getGames(): Promise<Game[]> {
        const getGame = await datasource.getRepository(Game).find();
        return getGame;
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