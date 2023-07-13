import { DataSource } from 'typeorm';
import User from './entity/User';
import Game from './entity/Game';

// initialisation de la bdd
const datasource = new DataSource({
    type: 'sqlite',
    database: './pointnclickdb.sqlite',
    synchronize: true,
    entities: [User, Game],
    logging: ["query", "error"],
});

export default datasource;