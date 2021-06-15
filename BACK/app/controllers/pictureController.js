const pictureDataMapper = require('../dataMapper/pictureDataMapper');

module.exports  = {

    async getImage(request, response, next){
        try{
            const { filename } = request.params;
            const get = await pictureDataMapper.findByPk(filename);
            if(!get){
                return next();
            }
            response.json({data : get})

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