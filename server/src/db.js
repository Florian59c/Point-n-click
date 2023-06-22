const typeorm = require('typeorm');
const User = require('./entity/user');

// initialisation de la bdd
const datasource = new typeorm.DataSource({
    type: 'sqlite',
    database: './pointnclickdb.sqlite',
    synchronize: true,
    entities: [User],
    logging: ["query", "error"],
});

module.exports = datasource;