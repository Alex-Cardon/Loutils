const AdModel = require ('../models/adModel');

module.exports = {

    async getByUserId(request, response, next){
        try{
            const ad = await AdModel.findByFk(request.params.id);

            if(!ad){
                return next();
            }

            response.json({data : ad.dataValues})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }

}