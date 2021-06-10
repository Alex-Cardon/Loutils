const bookmarkDataMapper = require ('../dataMapper/bookmarkDataMapper');

module.exports = {

    async getBookmarksById(request, response, next){
        try{
            const ad = await bookmarkDataMapper.findByPk(request.params.id);
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