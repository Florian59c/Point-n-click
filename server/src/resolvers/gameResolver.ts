import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Game, { GamesInput } from '../entity/Game';
import { ApolloError } from 'apollo-server';
import datasource from '../db';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    async getGames(): Promise<Game[]> {
        const getGame = await datasource.getRepository(Game).find();
        return getGame;
    };

    @Query(() => String)
    async findGameCode(@Arg("data") name: string): Promise<string> {
        const findGame = await datasource.getRepository(Game).findOneBy({ name });
        console.log(findGame?.code);
        if (findGame === null) {
            throw new ApolloError("Le jeu n'existe pas", "INVALID_CREDS");
        } else {
            return findGame.code;
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