const client = require('../client');
const path = require('path');

module.exports = {

    async findByPk(filename) {
        console.log("filename",filename);
        const result = await client.query(`SELECT * FROM "image_files" WHERE filename = $1`, [filename]);

        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    },

    async postAnImage(filename, mimetype, size, filepath) {
        console.log("filename", filename, "mimetype",mimetype, "size", size, "filepath", filepath);
        const result = await client.query(`INSERT INTO "image_files" (filename, filepath, mimetype,size) VALUES ($1, $2, $3, $4) RETURNING *`, [filename, filepath, mimetype,size]);
       
        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    }
    

}