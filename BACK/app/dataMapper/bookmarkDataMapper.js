const client = require('../client');

class BookmarkModel {

datavalues = {};

    set data(values) {
        for (const field of ad.fields) {
            if (values[field]) {
                ad.dataValues[field] = values[field];
            }
        }
    };

    static async findByPk(id) {
        const result = await client.query(`SELECT * FROM "ad" JOIN "bookmark" ON "ad"."id" = "bookmark"."ad_id" JOIN "user" ON "user"."id" = "bookmark"."user_id" WHERE "bookmark"."user_id"=$1;`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    };

    static async addBookmark(post) {
        const result = await client.query(`INSERT INTO "bookmark" 
        ("ad_id", "user_id") 
        VALUES($1, $2) RETURNING *`, [post.ad_id, post.user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    };

}

module.exports = BookmarkModel;