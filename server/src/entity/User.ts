// import { EntitySchema } from 'typeorm';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// // creation d'une entité - equivalant au tables et colonnes du sql
// // module.exports permet d'exporter le schema (ici dans index.js)
// export default new EntitySchema({
//     name: "Users",
//     columns: {
//         id: {
//             type: 'int',
//             primary: true,
//             generated: true,
//         },
//         pseudo: {
//             type: "text"
//         },
//         // mail: {
//         //     type: "text"
//         // },
//         // password: {
//         //     type: "text"
//         // },
//         // score: {
//         //     type: "time"
//         // },
//     }
// });

@Entity()
class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    pseudo: string
}

export default Users;