const savedSearchDataMapper = require('../dataMapper/savedSearchDataMapper');

module.exports = {

    async getSavedResearch(request, response, next){
        try{

            const user = request.user.user.user_id;

            const get = await savedSearchDataMapper.findSavedResearchByUserId(user);
            if(!get){
                return next();
            }
            response.json({data : get})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async addNewResearch(request, response, next) {
        try{

            const {postcode, title, radius, category_id} = request.body;

            const user_id = request.user.user.user_id;

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
            const { postcode, title, radius, category_id } = request.body;

            const id = request.params.id; 

            const result = await savedSearchDataMapper.updateSavedResearch(id, postcode, title, radius, category_id);

            console.log("controller 1 :",id, postcode, title, radius, category_id)
            console.log("controller 2 :", result)

            response.status(200).json({ data :result });

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