import datasource from "../db";
import Game from "../entity/Game";

async function reset(): Promise<void> {
    await datasource.initialize();
    await datasource.getRepository(Game).delete({});
    await datasource.getRepository(Game).save([
        {
            name: "StartPage",
            code: "azerty123"
        }, {
            name: "MailBox",
            code: "azerty456"
        },
    ]);
    await datasource.destroy();
    console.log("La table des jeux a été correctement réinitialisé !");

}

reset().catch(console.error);