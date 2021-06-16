const client = require('../client');
const fetch = require('node-fetch');

module.exports = {


    async findByUserId(id) {
        const result = await client.query(`SELECT * FROM "ad" WHERE "user_id" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },


    async findById(id) {
        const result = await client.query(`SELECT * FROM "ad"
        WHERE "id" = $1`, [id]);
        return result.rows;
    },


    async postAnAd(title, picture_id, price, product_state, deposit, description, ad_type, rating, postcode, category_id, user_id) {

        const result = await client.query(`INSERT INTO "ad" 
        ("title", "picture_id", "price", "product_state", "deposit", "description", "ad_type", "rating", "postcode", "category_id", "user_id") 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [title, picture_id, price, product_state, deposit, description, ad_type, rating, postcode, category_id, user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

    async updateAd(title, picture_id, price, product_state, deposit, description, ad_type, postcode, category_id, id) {
        const result = await client.query(`UPDATE "ad"
        SET "title" = $1, 
        "picture_id" = $2, 
        "price" = $3,
        "product_state" = $4, 
        "deposit" = $5, 
        "description" = $6, 
        "ad_type" = $7, 
        "postcode" = $8, 
        "category_id" = $9 
        WHERE "id" = $10 RETURNING *`, [title, picture_id, price, product_state, deposit, description, ad_type, postcode, category_id, id]);
        console.log(result.rows);
        return result.rows;

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
     
     AND "category"."name"= $2`, ['%' + title + '%', category]);


        return (result.rows);
    },


    /*Suppression d'une annonce */

    async deleteOneAd(id) {
        const result = await client.query(`DELETE FROM "ad" WHERE id = $1`, [id]);

        return result.rows[0];
    },

    /*Recherche des annonces avec titre, code postal et rayon */

    async getByTitle(title, postcode) {
        const result = await client.query(`SELECT * FROM "ad" 

    JOIN "category" ON "ad"."category_id" = "category"."id"
    
    JOIN "user" ON "ad"."user_id" = "user"."id"         
    
    WHERE "ad"."postcode" IN (` + postcode.join(',') + `)

     AND "ad"."title" LIKE $1`, ['%' + title + '%']);

        return (result.rows);
    },

    async getTenAds() {
        const result = await client.query(`SELECT * FROM "ad" ORDER BY RANDOM() LIMIT 2;`)
        return result.rows;
    }
}