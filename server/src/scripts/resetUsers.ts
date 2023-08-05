import User, { hashPassword } from "../entity/User";
import datasource from "../db";

async function resetUsers(): Promise<void> {
    await datasource.initialize();
    await datasource.getRepository(User).delete({});
    await datasource.getRepository(User).save([
        {
            pseudo: "Joueur1",
            email: "Joueur1@gmail.com",
            hashedPassword: await hashPassword('Azerty1!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur2",
            email: "Joueur2@gmail.com",
            hashedPassword: await hashPassword('Azerty2!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur3",
            email: "Joueur3@gmail.com",
            hashedPassword: await hashPassword('Azerty3!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur4",
            email: "Joueur4@gmail.com",
            hashedPassword: await hashPassword('Azerty4!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur5",
            email: "Joueur5@gmail.com",
            hashedPassword: await hashPassword('Azerty5!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur6",
            email: "Joueur6@gmail.com",
            hashedPassword: await hashPassword('Azerty6!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur7",
            email: "Joueur7@gmail.com",
            hashedPassword: await hashPassword('Azerty7!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur8",
            email: "Joueur8@gmail.com",
            hashedPassword: await hashPassword('Azerty8!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur9",
            email: "Joueur9@gmail.com",
            hashedPassword: await hashPassword('Azerty9!'),
            bestScore: 86400
        },
        {
            pseudo: "Joueur10",
            email: "Joueur10@gmail.com",
            hashedPassword: await hashPassword('Azerty10!'),
            bestScore: 86400
        },
    ]);
    await datasource.destroy();
    console.log("La table Users a été correctement réinitialisée !");
}

resetUsers().catch(console.error);