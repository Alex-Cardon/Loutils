const client = require('../client');


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
    },
/*
    getAccountInformations: async(id) => {
        const result = await client.query(`SELECT * FROM "user"
        JOIN "ad" ON "user"."id"= "ad"."user_id"
        JOIN "saved_research" ON "user"."id"= "saved_research"."user_id"
        JOIN "message" ON "user"."id"="message"."sender"
        WHERE "user"."id" = $1`, [id]);
        return result.rows;
    },
*/
    async createAnAccount(post) {
    const result = await client.query(`INSERT INTO "user" 
    ("name", "email", "password", "phone", "role") 
    VALUES($1, $2, $3, $4, $5) RETURNING *`, [post.name, post.email, post.password, post.phone, post.role]);

    if (!result.rows) {
        return null;
    }
    return result.rows[0];
    },

}