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

}

module.exports = MessageModel;