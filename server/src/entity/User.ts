import { ObjectType, Field, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';
import { argon2id, hash, verify } from 'argon2';

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

    @Column()
    hashedPassword: string

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
    @IsEmail()
    email: string

    @Field()
    @MinLength(8)
    // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/)
    password: string
}

@InputType()
export class LoginInput {
    @Field()
    @IsEmail()
    email: string

    @Field()
    @MinLength(8)
    // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/)
    password: string
}




// configuration de hashage
const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
};

// function pour ne pas répéter la configuration des options de hash
export async function hashPassword(plain: string): Promise<string> {
    return await hash(plain, hashingOptions);
};

// pour comparer un mdp en clair avec un mdp hashé
export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
    return await verify(hashed, plain, hashingOptions);
};

export default Users;