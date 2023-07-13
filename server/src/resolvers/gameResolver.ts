import { Resolver, Query } from 'type-graphql';
import Game from '../entity/Game';
import datasource from '../db';

@Resolver()
export class GameResolver {
    @Query(() => [Game])
    async getGames(): Promise<Game[]> {
        const getGame = await datasource.getRepository(Game).find();
        return getGame;
    };
};