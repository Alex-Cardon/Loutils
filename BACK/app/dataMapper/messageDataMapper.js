const client = require('../client');

module.exports = {

    async getRecievedMsgByUserId(id) {
        const result = await client.query(`SELECT * FROM "message" WHERE "recipient" = $1`, [id]);
        return result.rows;
    },

<<<<<<< HEAD
    async getSenderMessageByUserId(id) {
=======
    async getMessageByUserId(id) {
>>>>>>> 7b910e9d1ff2456ee79f812ac2d196a26b6533b0
        const result = await client.query(`SELECT * FROM "message" WHERE "sender" = $1`, [id]);

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

