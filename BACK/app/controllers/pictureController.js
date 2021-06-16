const pictureDataMapper = require('../dataMapper/pictureDataMapper');
const path = require ('path');

module.exports  = {

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

    async postImage(request, response, next) {
        try {
            const { filename, mimetype, size } = request.file;
            console.log(filename);
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