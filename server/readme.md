Dans le package.json : "npm run" suivi du nom du scrip lance la commande défini juste après ("npm start" lance la commande "node index.js")
npm start n'a pas besoin du run, mais c'est une execption !!!

les devdependencies ne serve que pour un environement de developpement (inutile et non utilisé en prod par exemple)

Les commandes "npm run resetUsers" et "npm run resetGames" créent une base de données avec des données fictives pour le developpement.