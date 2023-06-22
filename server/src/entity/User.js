const { EntitySchema } = require('typeorm');

// creation d'une entité - equivalant au tables et colonnes du sql
// module.exports permet d'exporter le schema (ici dans index.js)
module.exports = new EntitySchema({
    name: "Users",
    columns: {
        id: {
            type: 'int', 
            primary: true,
            generated: true,
        },
        pseudo: {
            type: "text"
        },
        // mail: {
        //     type: "text"
        // },
        // password: {
        //     type: "text"
        // },
        // score: {
        //     type: "time"
        // },
    }
});