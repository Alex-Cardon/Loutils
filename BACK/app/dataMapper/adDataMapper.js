const client = require('../client');

class AdModel {

datavalues = {};

    set data(values) {
        for (const field of ad.fields) {
            if (values[field]) {
                ad.dataValues[field] = values[field];
            }
        }
    };

    static async findByPk(id) {
        const result = await client.query(`SELECT * FROM "ad" WHERE "user_id" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    };

    static async postAnAd(post) {
        const result = await client.query(`INSERT INTO "ad" 
        ("title", "picture", "price", "product_state", "deposit", "description", "ad_type", "rating", "postcode", "category_id", "user_id") 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [post.title, post.picture, post.price, post.product_state, post.deposit, post.description, post.ad_type, post.rating, post.postcode, post.category_id, post.user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    };


}

module.exports = AdModel;