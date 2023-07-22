import { DataSource } from 'typeorm';
import User from './entity/User';
import Game from './entity/Game';

// initialisation de la bdd
const datasource = new DataSource({
    type: 'postgres',
    host: 'localhost', // pour faire tourner dans localhost en dehors de docker
    // host: 'db', // pour faire tourner dans docker
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: true,
    entities: [User, Game],
    logging: ["query", "error"],
});

export default datasource;