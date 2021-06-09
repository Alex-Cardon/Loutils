const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {

    async getByUserId(request, response, next){
        try{
            const ad = await adDataMapper.findByPk(request.params.id);
            console.log(request.params.id);
            if(!ad){
                return next();
            }
            console.log(ad);
            response.json({data : ad})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
 
}