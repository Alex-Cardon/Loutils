const client = require('./client');


module.exports = {
    async findOneByEmail(option) {
        const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [option]);
        return result.rows[0];
    },

    async createUser(name, email, hashPassword, role) {
        const result = await client.query(`INSERT INTO "user" 
        (name, email, password, role) VALUES ($1, $2, $3, $4)
         RETURNING * `
        , [name, email, hashPassword, role]);
        return result.rows[0];
    }
}