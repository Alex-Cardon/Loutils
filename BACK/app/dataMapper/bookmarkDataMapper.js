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

}

module.exports = BookmarkModel;