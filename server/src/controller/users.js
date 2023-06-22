const db = require('../db');
const user = require('../entity/user');

/** recuperation depuis le client
 * req.body recupere se qui se trouve dans le corp de la requete
 * req.params recupere les parametre dans le chemin http (/users/3)
 * req.query pour recupere des filtres (/users?pseudoStartWith=F)
 */

module.exports = {
    // version avec .then
    /**
    create: (req, res) => {
        db.getRepository(user).save({ pseudo: req.body.pseudo }).then((createdUser) => {
            res.send(createdUser);
        }).catch((error) => {
            console.error(error);
        });
    },
    */

    // version avec fonction asynchrone
    create: async (req, res) => {
        try {
            // validation que l'utilisateur n'existe pas
            if (!req.body.pseudo) {
                return res.status(422).send("impossible d'envoyer un pseudo inexistant");
            }
            const getPseudo = await db.getRepository(user).findOneBy({pseudo: req.body.pseudo})
            console.log(getPseudo);
            if (getPseudo) {
                return res.send("le pseudo existe déjà")
            }
            const createdUser = await db.getRepository(user).save({ pseudo: req.body.pseudo });
            res.send(createdUser);
        } catch (error) {
            console.error(error);
            res.status(500).send("erreur lors de la creation de l'utilisateur");
        }
    },
    getAll: async (req, res) => {
        try {
            const getUser = await db.getRepository(user).find();
            res.send(getUser);
        } catch (error) {
            console.error(error);
            res.status(500).send("erreur lors de la l'affichage des utilisateurs");
        }
    },
    // getPseudoStartWithF: async (req, res) => {
    //     try {
    //         const getUserStartWithF = await db.getRepository(user).createQueryBuilder('users')
    //             .where("users.pseudo like :pseudo", { pseudo: `%${req.query.pseudoStartWith}%` })
    //             .getMany();
    //         res.send(getUserStartWithF);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).send("erreur lors de la l'affichage des utilisateurs commençant par F");
    //     }
    // },
    deleteOne: async (req, res) => {
        try {
            const result = await db.getRepository(user).delete(req.params.id);
            if (result.affected === 0) {
                return res.status(404).send("L'utilisateur n'a pas été trouvé");
            }
            return res.send("suppression effectué");
        } catch (error) {
            console.error(error);
            res.status(500).send("erreur lors de la suppression de l'utilisateur");
        }
    },
};