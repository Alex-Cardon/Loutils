const client = require('../client');
const path = require('path');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
    },
});



module.exports = {

    async findByPk(filename) {
        console.log("filename",filename);
        const result =
        await db.select('*').from('image_files').where({
            filename
        })
        .then(images => {
            if (images[0]) {
                const dirname = path.resolve();
                const fullfilepath = path.join(dirname,
                    images[0].filepath);
                return response
                    .type(images[0].mimetype)
                    .sendFile(fullfilepath);
            }
            return Promise.reject(new Error("L'image n'existe pas"));
        })
        .catch(error => response
            .status(404)
            .json({
                success: false,
                message: 'Not found',
                stack: error.stack,
            }),
        );

        if (!result.rows) {
            return null;
        }
        return (result.rows);
    },

    async postAnImage(filename, mimetype, size, filepath) {
        console.log("filename", filename, "mimetype",mimetype, "size", size, "filepath", filepath);
        const result = 
        await db.insert({
                filename,
                filepath,
                mimetype,
                size
            })
        .into('image_files')
        .then(console.log(
                success= true,
                filename
            ))
        .catch(console.log(
                success = false,
                message= 'upload failed',
                console.trace()
            ));
            /*retourne une erreur alors que bien inserré dans la bdd et dans le fichier */
        if (!result.rows) {
            return null;
        }
        return result.rows[0];
    }
    

}