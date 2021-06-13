const client = require('../client');
const fetch = require('node-fetch');

module.exports = {

     async fetchCP(userPC, radius) {
        try {
            const url = `https://www.villes-voisines.fr/getcp.php?cp=${userPC}&rayon=${radius}`
            
            const result = await fetch(url);
            return result.json();
       
        } catch (error) {
            console.log(error);
        }
    },

/*Recherche des annonces avec titre, catégorie, code postal et rayon */

    async getByTitleAndCat(category, postcode, title) {
   
    const result = await client.query(`SELECT * FROM "ad" 

    JOIN "category" ON "ad"."category_id" = "category"."id"
    
    JOIN "user" ON "ad"."user_id" = "user"."id"         
    
    WHERE "ad"."postcode" IN (` + postcode.join(',') + `)

     AND "ad"."title" LIKE $1 
     
     AND "category"."name"= $2`, ['%'+title+'%', category]);

    return (result.rows);
},

/*Recherche des annonces avec titre, code postal et rayon */

async getByTitle(title, postcode) {
    const result = await client.query(`SELECT * FROM "ad" 

    JOIN "category" ON "ad"."category_id" = "category"."id"
    
    JOIN "user" ON "ad"."user_id" = "user"."id"         
    
    WHERE "ad"."postcode" IN (` + postcode.join(',') + `)

     AND "ad"."title" LIKE $1`, ['%'+title+'%']);

    return (result.rows);
}


}

