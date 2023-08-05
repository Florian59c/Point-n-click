import Game from "../entity/Game";
import datasource from "../db";

async function resetGames(): Promise<void> {
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
    console.log("La table Games a été correctement réinitialisé !");

}

resetGames().catch(console.error);