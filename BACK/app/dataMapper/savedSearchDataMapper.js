const client = require('../client');


module.exports = {

    /*afficher les recherches enregistrées de monsieur x*/

    async findSavedResearchByUserId(id) {
        console.log(id);
        const result = await client.query(`SELECT * FROM "saved_research" WHERE "user_id" = $1`, [id]);
        console.log(result);
        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },

     /*Enregistrer une recherche */

     async addNewResearch(post) {
        const result = await client.query(`INSERT INTO "saved_research" ("postcode", "title", "radius", "category_id", "user_id")
        VALUES ($1, $2, $3, $4, $5) RETURNING *`, [post.postcode, post.title, post.radius, post.category_id, post.user_id]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

    /*Modifier sa recherche enregistrée*/

    async updateSavedResearch(id, postcode, title, radius, category_id) {
        console.log(id, postcode, title, radius, category_id );
        const result = await client.query(`UPDATE "saved_research" 
        SET "postcode"=$1, "title"=$2, "radius"=$3, "category_id"=$4 
        WHERE "id"=$5 RETURNING *`, [postcode, title, radius, category_id, id]);
        console.log(postcode, title, radius, category_id, id);
        return result.rows;
    },

    async deleteOneSavedResearch(id){
        const result = await client.query(`DELETE FROM "saved_research" WHERE id = $1`, [id]);

        return result.rows[0];
    },
}

