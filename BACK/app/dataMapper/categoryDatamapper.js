const client = require('../client');

module.exports = {

    async getCategories(){
        const result = await client.query(`SELECT * FROM "category"`);
        return result.rows;
    }
}