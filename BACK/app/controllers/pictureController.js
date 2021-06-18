const pictureDataMapper = require('../dataMapper/pictureDataMapper');
const path = require ('path');

/**
 * @typedef Picture
 * @property {number} id - Identifiant unique
 * @property {string} filename - Titre de la photo
 * @property {string} filepath - Lieu de stockage de la photo
 * @property {string} mimetype - Type de la photo
 * @property {number} size - taille de l'image
 * @property {string} created_at - Date de création (date ISO 8601)
  */

/**
 * @typedef PictureInput 
 * @property {string} filename - Titre de la photo
 * @property {string} filepath - Lieu de stockage de la photo
 * @property {string} mimetype - Type de la photo
 * @property {number} size - taille de l'image
 */

module.exports  = {

           /**
     * Afficher une image
     * @property {string} filename - Titre de la photo
     * @returns {object} L'image
     */
    async getImage(request, response, next){
        try{
            const { filename } = request.params;
            const image = await pictureDataMapper.findByPk(filename);
            if(!image){
                return next();
            }
            const dirname = path.resolve();
            const fullfilepath = path.join(dirname,
                image.filepath);
            response
                .type(image.mimetype)
                .sendFile(fullfilepath);

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    /**
     * Poster une image
     * @param {object} image - L'image que l'on souhaite charger
     * @returns {object} l'identifiant de l'image, le nom du fichier, l'amplacement du fichier, le mimetype, la taille et la date de création
     */

    async postImage(request, response, next) {
        try {
            const { filename, mimetype, size } = request.file;
            const filepath = request.file.path;
            const postImage = await pictureDataMapper.postAnImage( filename, mimetype, size, filepath );

            if(!postImage){
                return next();
            }

            response.json({data : postImage});
        }catch (error) {
            console.trace(error);
            response.json({ error });
        }

    },

};