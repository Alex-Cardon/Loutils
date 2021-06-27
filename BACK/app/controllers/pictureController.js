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
    async getImage(req, res, next){
        try{
            const { filename } = req.params;
            const image = await pictureDataMapper.findByPk(filename);
            if(!image){
                return res.status(405).json({
                    msg: "Cette image n'existe pas"
                  });
            }
            const dirname = path.resolve();
            const fullfilepath = path.join(dirname,
                image.filepath);
            res.status(200)
                .type(image.mimetype)
                .sendFile(fullfilepath);

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Poster une image
     * @param {object} image - L'image que l'on souhaite charger
     * @returns {object} l'identifiant de l'image, le nom du fichier, l'amplacement du fichier, le mimetype, la taille et la date de création
     */

    async postImage(req, res, next) {
        console.log(req.file);
    
        try {
            const { mimetype, size } = req.file;
            const filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname)
            const filepath = 'http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/' + req.file.path;
            const postImage = await pictureDataMapper.postAnImage( filename, mimetype, size, filepath );


            if(!postImage){
                return next();
            }

            res.status(200).json({data : postImage});
        
        }catch (error) {
            console.trace(error);
            res.json({ error });
        }

    },
   

};