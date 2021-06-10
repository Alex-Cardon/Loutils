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

}

module.exports = AdModel;