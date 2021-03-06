const client = require('../client');


module.exports = {

    async getAllUsers() {
        const result = await client.query(`SELECT "id", "name", "email", "role" FROM "user"`);
        return result.rows;
    },

    async oneAccountById(id) {
        const result = await client.query(`SELECT * FROM "user"
        WHERE "id" = $1`, [id]);
        return result.rows[0];
    },

    async findOneById(id) {
        const result = await client.query(`SELECT * FROM "user"
        WHERE "id" = $1`, [id]);
        return result.rows[0];
    },
    
    async findOneByEmail(email) {
        const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [email]);
        return result.rows[0];
    },

    async findById(id) {
        const result = await client.query(`SELECT "id", "name", "role", "email", "confirmed" FROM "user" WHERE "id" = $1`, [id]);

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },

    async createUser(name, email, hashPassword, role) {
        const result = await client.query(`INSERT INTO "user" 
        (name, email, password, role) VALUES ($1, $2, $3, $4)
         RETURNING * `
        , [name, email, hashPassword, role]);
        return result.rows[0];
    },

    getAccountInformations: async(id) => {
        const result = await client.query(`SELECT name, email FROM "user"
        WHERE id = $1`, [id]);
        return result.rows;
    },

    async patchUserInfo(id, name, email) {
        const result = await client.query(`UPDATE "user"
        SET "name" = $1,
        "email" = $2
        WHERE "id" = $3 RETURNING "name", "email"`, [name, email, id]);
        return result.rows;
    },
    
    async patchUserPassword(hashPassword, id) {
        const result = await client.query(`UPDATE "user"
        SET "password" = $1
        WHERE "id" = $2 RETURNING "name"`, [hashPassword, id]);
        return result.rows;   
    },

    async deleteUser(id) {
        const result = await client.query(`DELETE FROM "user"
        WHERE "id" = $1`, [id]);
        return result;
    },
    
    async confirmUser(id) {
        const result = await client.query(`UPDATE "user"
        SET "confirmed" = TRUE
        WHERE "id" = $1 RETURNING "name"`, [id]);
        return result.rows;
    },

    async changeRole(id, role) {
        const result = await client.query(`UPDATE "user"
        SET "role" = $1
        WHERE "id" = $2 RETURNING "name", "role"`, [role, id]);
        return result.rows[0];
    },

    async passwordForget(id) {
        const result = await client.query(`UPDATE "user"
        SET "forg_pass" = TRUE
        WHERE "id" = $1 RETURNING "name"`, [id]);
        return result.rows;
    },

    async changePassword(hashPassword, id) {
        const result = await client.query(`UPDATE "user"
        SET "password" = $1,
            "forg_pass" = FALSE
        WHERE "id" = $2 RETURNING "name"`, [hashPassword, id]);
        return result.rows;   
    },

}