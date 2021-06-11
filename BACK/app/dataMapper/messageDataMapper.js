const client = require('../client');

class MessageModel {

datavalues = {};

    set data(values) {
        for (const field of message.fields) {
            if (values[field]) {
                message.dataValues[field] = values[field];
            }
        }
    };

    static async getMessageByUserId(id) {
        const result = await client.query(`SELECT * FROM "message" WHERE "sender" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    };

    static async postAMessage(post) {
        const result = await client.query(`INSERT INTO "message" 
        ("content", "recipient", "sender") 
        VALUES($1, $2, $3) RETURNING *`, [post.content, post.recipient, post.sender]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    };

}

module.exports = MessageModel;