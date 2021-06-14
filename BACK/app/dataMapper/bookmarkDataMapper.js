const client = require('../client');

module.exports = {

     async findByPk(id) {

        const result = await client.query(`SELECT * FROM "ad" JOIN "bookmark" ON "ad"."id" = "bookmark"."ad_id" JOIN "user" ON "user"."id" = "bookmark"."user_id" WHERE "bookmark"."user_id"=$1;`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },


     async addBookmark(ad_id, user_id) {

        const result = await client.query(`INSERT INTO "bookmark" 
        ("ad_id", "user_id") 
        VALUES($1, $2) RETURNING *`, [ad_id, user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];

    },

    async deleteOneBookmark(ad_id, user_id) {
        const result = await client.query(`DELETE FROM "bookmark"
        WHERE ad_id = $1 AND user_id = $2`, [ad_id, user_id]);

        return result.rows[0];
    }


}


