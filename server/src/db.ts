import { DataSource } from 'typeorm';
import User from './entity/User';
import Game from './entity/Game';
import { env } from "./env";

// Paramètres d'initialisation de la bdd
const datasource = new DataSource({
    type: 'postgres',
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