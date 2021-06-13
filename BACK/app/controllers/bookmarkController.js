const bookmarkDataMapper = require ('../dataMapper/bookmarkDataMapper');

module.exports = {

    async getBookmarksById(request, response, next){
        try{
            const ad = await bookmarkDataMapper.findByPk(request.params.id);
            if(!ad){
                return next();
            }
            response.json({data : ad})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async addBookmark(request, response, next){
        try{

            const { ad_id, user_id } = request.body;

            const post = await bookmarkDataMapper.
            addBookmark({ ad_id, user_id });
            
    
            if(!post){
                return next();
            }
    
            response.json({data : post})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
 
}

