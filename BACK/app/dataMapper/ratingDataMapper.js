const client = require('../client');

module.exports = {

    async ratexist(user_id, ad_id) {


        const result = await client.query(`SELECT * FROM "ad_rating"
        WHERE "rated_by_user" = $1 AND "rated_ad" = $2`, [user_id, ad_id]);


        return result.rows;
    },

    async ratingAd(user_id, ad_id, rating) {

        const result = await client.query(`INSERT INTO "ad_rating"
        VALUES ($1, $2, $3) RETURNING *`, [user_id, ad_id, rating]);

        return result.rows;
    },

    async getAVGRating(ad_id) {
        const result = await client.query(`SELECT 
        AVG(rating) FROM "ad_rating" WHERE "rated_ad" = $1 GROUP BY "rated_ad"`, [ad_id]);
        return result.rows;
    },

    async updateRating(user_id, ad_id, rating) {

        const result = await client.query(`UPDATE "ad_rating"
        SET "rating" = $1
        WHERE "rated_by_user" = $2 AND "rated_ad" = $3 RETURNING *`, [rating, user_id, ad_id]);

        return result.rows;
    }

}