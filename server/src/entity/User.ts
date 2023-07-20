// import { EntitySchema } from 'typeorm';
import { ObjectType, Field, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MaxLength } from 'class-validator';

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

@ObjectType()
@Entity()
class Users {
    @PrimaryGeneratedColumn()
    @Field()
    id: number

    @Column({ unique: true })
    @Field()
    pseudo: string

    @Column({ unique: true })
    @Field()
    email: string

    @Column({ unique: true })
    @Field()
    password: string

    @Column()
    @Field()
    bestScore: number
}

@InputType()
export class UsersInput {
    @Field()
    @MaxLength(30)
    pseudo: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    bestScore: number
}

export default Users;