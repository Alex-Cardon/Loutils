const client = require('../client');
const fetch = require('node-fetch');

module.exports = {


   async findByPk(id) {
        const result = await client.query(`SELECT * FROM "ad" WHERE "user_id" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },

   async postAnAd(post) {
        const result = await client.query(`INSERT INTO "ad" 
        ("title", "picture", "price", "product_state", "deposit", "description", "ad_type", "rating", "postcode", "category_id", "user_id") 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [post.title, post.picture, post.price, post.product_state, post.deposit, post.description, post.ad_type, post.rating, post.postcode, post.category_id, post.user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

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

