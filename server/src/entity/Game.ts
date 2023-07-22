import { ObjectType, Field, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
class Games {
    @PrimaryGeneratedColumn()
    @Field()
    id: number

    @Column({ unique: true })
    @Field()
    name: string

    @Column({ unique: true })
    @Field()
    code: string
}

@InputType()
export class GamesInput {
    @Field()
    name: string

    @Field()
    code: string
}

export default Games;