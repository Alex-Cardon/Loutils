const client = require('../client');

module.exports = {

    async getRecievedMsgByUserId(id) {
        const result = await client.query(`SELECT "message"."id", "message"."content", "message"."created_at", "message"."has_been_read", "user"."name" FROM "message" JOIN 
        "user" ON "sender" = "user"."id"
        WHERE "recipient" = $1`, [id]);
        return result.rows;
    },

    async getSenderMessageByUserId(id) {
        const result = await client.query(`SELECT "message"."id", "message"."content", "message"."created_at", "message"."has_been_read", "user"."name" FROM "message" JOIN
        "user" ON "recipient" = "user"."id"
         WHERE "sender" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },

    async postAMessage(post) {
        const result = await client.query(`INSERT INTO "message" 
        ("content", "recipient", "sender") 
        VALUES($1, $2, $3) RETURNING *`, [post.content, post.recipient, post.sender]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

    async deleteAMessage(id) {
        const result = await client.query(`DELETE FROM "message" 
        WHERE "id" = $1`, [id]);

        return result.rows[0];
    }

}

