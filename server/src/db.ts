import { DataSource } from 'typeorm';
import User from './entity/User';

// initialisation de la bdd
const datasource = new DataSource({
    type: 'sqlite',
    database: './pointnclickdb.sqlite',
    synchronize: true,
    entities: [User],
    logging: ["query", "error"],
});

export default datasource;