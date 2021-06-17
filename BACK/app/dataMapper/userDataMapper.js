const client = require('../client');


module.exports = {
    async findOneById(id) {
        const result = await client.query(`SELECT * FROM "user"
        WHERE "id" = $1`, [id]);
        return result.rows[0];
    },
    
    async findOneByEmail(email) {
        const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [email]);
        return result.rows[0];
    },

    async findByPk(id) {
        const result = await client.query(`SELECT * FROM "user" WHERE "user_id" = $1`, [id]);

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

    async createAnAccount(post) {
    const result = await client.query(`INSERT INTO "user" 
    ("name", "email", "password", "phone", "role") 
    VALUES($1, $2, $3, $4, $5) RETURNING *`, [post.name, post.email, post.password, post.phone, post.role]);

    if (!result.rows) {
        return null;
    }
    return result.rows[0];
    },

    async patchUserInfo(id, name, email) {
        const result = await client.query(`UPDATE "user"
        SET "name" = $1,
        "email" = $2
        WHERE "id" = $3 RETURNING *`, [name, email, id]);
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
        WHERE "id" = $1 RETURNING "name"`, [id]);
        return result;
    }

}