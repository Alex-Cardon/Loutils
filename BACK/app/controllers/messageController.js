const messageDataMapper = require ('../dataMapper/messageDataMapper');

module.exports = {

    async getMessageByUserId(request, response, next){
        try{
            const message = await messageDataMapper.getMessageByUserId(request.params.id);
            if(!message){
                return next();
            }
            response.json({data : message})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async postAMessage(request, response, next){
        try{

            const { content, recipient, sender} = request.body;

            const post = await messageDataMapper.
            postAMessage({ content, recipient, sender });
            
    
            if(!post){
                return next();
            }
    
            response.json({data : post})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async deleteAMessage (request, response, next)  {

        try {
            const id = request.params.id;
            const result = await userDataMapper.deleteAMessage(id);

            response.json({"msg" : "message supprimé"});
        } catch (error) {
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }
    }

}
