const client = require('../client');

module.exports = {

    async getRecievedMsgByUserId(id) {
        const result = await client.query(`SELECT "message"."id" AS "msg_id", "user"."id" AS "sender_id", "message"."content", "message"."created_at", "message"."has_been_read", "user"."name" AS "sender_name", "title" FROM "message" JOIN 
        "user" ON "sender" = "user"."id" 
        JOIN "ad" ON "ad_id" = "ad"."id"
        WHERE "recipient" = $1 AND "recipient_deleted" = FALSE`, [id]);

        return result.rows;
    },

    async getSenderMessageByUserId(id) {
        const result = await client.query(`SELECT "message"."id" AS "msg_id", "user"."id" AS "recipient_id", "message"."content", "message"."created_at", "message"."has_been_read", "user"."name" AS "recipient_name", "sender" AS "sender_id", "title" FROM "message" JOIN
        "user" ON "recipient" = "user"."id" 
        JOIN "ad" ON "ad_id" = "ad"."id"
        WHERE "sender" = $1 AND "sender_deleted" = FALSE`, [id]);

        return result.rows;
    },

    async postAMessage(post) {
        const result = await client.query(`INSERT INTO "message" 
        ("content", "recipient", "sender", "ad_id") 
        VALUES($1, $2, $3, $4) RETURNING *`, [post.content, post.recipient, post.sender, post.ad_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

   /* async deleteAMessage(id) {
        const result = await client.query(`DELETE FROM "message" 
        WHERE "id" = $1`, [id]);

        return result.rows[0];
    },*/

    async hasBeenRead(id) {
        const result = await client.query(`UPDATE "message"
        SET "has_been_read" = TRUE 
        WHERE "id" = $1 RETURNING *`, [id])
        return result.rows;
    },

    async senderDeleted(id) {
        const result = await client.query(`UPDATE "message"
        SET "sender_deleted" = TRUE
        WHERE "id" = $1 RETURNING *`, [id]);
        return result.rows;
    },

    async recipientDeleted(msg_id) {
        const result = await client.query(`UPDATE "message"
        SET "recipient_deleted" = TRUE
        WHERE "id" = $1 RETURNING *`, [msg_id]);
        return result.rows;
    }

}

