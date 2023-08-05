import { DataSource } from 'typeorm';
import { env } from "./env";
import User from './entity/User';
import Game from './entity/Game';

// initialisation de la bdd
const datasource = new DataSource({
    type: 'postgres',
    // host: 'localhost', // pour faire tourner dans localhost en dehors de docker
    // host: 'db', // pour faire tourner dans docker
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: true,
    entities: [User, Game],
    logging: ["query", "error"],
});

export default datasource;