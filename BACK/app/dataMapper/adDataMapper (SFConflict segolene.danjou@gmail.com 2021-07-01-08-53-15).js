const client = require('../client');
const fetch = require('node-fetch');

module.exports = {


    async findByUserId(id) {
        const result = await client.query(`SELECT "ad"."id" AS "ad_id", "image_files"."id" AS "img_id", "title", "price", "product_state", "deposit", "description", "postcode", "category"."name" AS "category_name", "filepath", "user"."name", "ad"."created_at", "user"."id" AS "user_id" 
        FROM "ad" 
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
        JOIN "category" ON "category_id" = "category"."id" 
        JOIN "user" ON "ad"."user_id" = "user"."id"
        WHERE "ad"."user_id" = $1`, [id]);
        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },


    async findById(id) {
        const result = await client.query(`SELECT "ad"."id" AS "ad_id", "image_files"."id" AS "img_id", "title", "price", "product_state", "deposit", "description", "postcode", "category"."name" AS "category_name", "filepath", "user"."name", "ad"."created_at", "user"."id" AS "user_id" 
        FROM "ad" 
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
        JOIN "category" ON "category_id" = "category"."id" 
        JOIN "user" ON "ad"."user_id" = "user"."id"
        WHERE "ad"."id" = $1 `, [id]);
        return result.rows;
    },


    async postAnAd(title, picture_id, price, product_state, deposit, description, ad_type, postcode, category_id, user_id) {
        const result = await client.query(`INSERT INTO "ad" 
        ("title", "picture_id", "price", "product_state", "deposit", "description", "ad_type", "postcode", "category_id", "user_id") 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, [title, picture_id, price, product_state, deposit, description, ad_type, postcode, category_id, user_id]);

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

        const result = await client.query(`SELECT "ad"."id" AS "ad_id", "image_files"."id" AS "img_id", "title", "price", "product_state", "deposit", "description", "postcode", "category"."name" AS "category_name", "filepath", "user"."name", "ad"."created_at", "user"."id" AS "user_id" 
        FROM "ad" 
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
        JOIN "category" ON "category_id" = "category"."id" 
        JOIN "user" ON "ad"."user_id" = "user"."id"         
        WHERE "ad"."postcode" IN (` + postcode.join(',') + `)
        AND LOWER("ad"."title") LIKE LOWER($1) 
        AND "category"."name"= $2
        AND "moderated" = TRUE 
        ORDER BY "ad"."created_at" DESC`, ['%' + title + '%', category]);


        return (result.rows);
    },


    /*Suppression d'une annonce */

    async deleteOneAd(id, user_id) {
        const result = await client.query(`DELETE FROM "ad" WHERE "id" = $1 AND "user_id" = $2`, [id, user_id]);

        return result.rows[0];
    },

    /*Recherche des annonces avec titre, code postal et rayon */

    async getByTitle(title, postcode) {
        const result = await client.query(`SELECT "ad"."id" AS "ad_id", "image_files"."id" AS "img_id", "title", "price", "product_state", "deposit", "description", "postcode", "category"."name" AS "category_name", "filepath", "user"."name", "ad"."created_at", "user"."id" AS "user_id" 
        FROM "ad" 
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
        JOIN "category" ON "category_id" = "category"."id" 
        JOIN "user" ON "ad"."user_id" = "user"."id"         
    WHERE "ad"."postcode" IN (` + postcode.join(',') + `)
     AND LOWER("ad"."title") LIKE LOWER($1)
     
     AND "moderated" = TRUE
     
     ORDER BY "ad"."created_at" DESC`, ['%' + title + '%']);

        return (result.rows);
    },

    async getTenAds() {
        const result = await client.query(`SELECT "ad"."id" AS "ad_id", "image_files"."id" AS "img_id", "title", "price", "product_state", "deposit", "description", "postcode", "category"."name" AS "category_name", "filepath", "user"."name", "ad"."created_at", "user"."id" AS "user_id" 
         FROM "ad" 
         JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
         JOIN "category" ON "category_id" = "category"."id" 
         JOIN "user" ON "ad"."user_id" = "user"."id"
        WHERE "moderated" = TRUE ORDER BY RANDOM() LIMIT 10`)
        return result.rows;
    },

    async moderated(id) {
        const result = await client.query(`UPDATE "ad"
        SET "moderated" = TRUE
        WHERE "id" = $1 RETURNING *`, [id]);
        return result.rows;
    },

    async getAllNonModAd() {
        const result = await client.query(`SELECT "ad"."id", "title" FROM "ad"
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id"
        WHERE "moderated" = FALSE ORDER BY "ad"."created_at" DESC`);
        return result.rows;
    },

    async ModofindById(id) {
        const result = await client.query(`SELECT * FROM "ad"
        JOIN "image_files" ON "ad"."picture_id" = "image_files"."id" 
        WHERE "ad"."id" = $1`, [id]);
        return result.rows;
    },

    async deleteAd(id) {
        const result = await client.query(`DELETE FROM "ad" WHERE "id" = $1`, [id]);

        return result.rows[0];
    }

}