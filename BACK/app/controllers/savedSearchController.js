const savedSearchDataMapper = require('../dataMapper/savedSearchDataMapper');

module.exports = {

    async addNewResearch(request, response, next) {
        try{

            const {postcode, title, radius, category_id, user_id} = request.body;
            const post = await savedSearchDataMapper.addNewResearch({postcode, title, radius, category_id, user_id});
            console.log(post);
            if(!post){
                return next();
            }
    
            response.json({data : post})


        }catch(error){
            console.trace(error);
            response.json({error});
        }
    },


    async updateSavedResearch (request, response, next){
        try{

            const id = request.user.user.user_id;
            const { postcode, title, radius, category_id } = request.body;
            const result = await savedSearchDataMapper.updateSavedResearch(id, postcode, title, radius, category_id);

            if(result){
                response.json({result})
              }

        }catch(error){
            console.trace(error);
            response.json(error);
        }
    },

    async deleteSavedResearch (request, response, next) {
        try{
            const id = request.params.id;
            const result = await savedSearchDataMapper.deleteOneSavedResearch(id);

            response.json({"msg" : "message supprimé"});
        }catch(error){
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },
}