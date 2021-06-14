const bookmarkDataMapper = require ('../dataMapper/bookmarkDataMapper');

module.exports = {

    async getBookmarksById(request, response, next){
        try{
            const id = request.user.user.user_id;
            const ad = await bookmarkDataMapper.findByPk(id);

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

            const user_id = request.user.user.user_id;
            const ad_id = request.params.id

            const post = await bookmarkDataMapper.
            addBookmark(ad_id, user_id);
            
    
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

