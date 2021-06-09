const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {

    async getByUserId(request, response, next){
        try{
            const ad = await adDataMapper.findByFk(request.params.id);

            if(!ad){
                return next();
            }
  
            response.json({data : ad})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
 
}