import { ObjectType, Field, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MaxLength } from 'class-validator';

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