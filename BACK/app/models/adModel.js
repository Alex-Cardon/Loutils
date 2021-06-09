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

    static async findByFk(id) {
        const result = await ad.query(`SELECT * FROM "ad" WHERE user_id = $1`, [id]);

        if (!result.rows[0]) {
            return null;
        }
        return (result.rows[0]);
    };

}

module.exports = AdModel;