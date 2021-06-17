const messageDataMapper = require ('../dataMapper/messageDataMapper');

module.exports = {

    async getMessageByUserId(request, response, next){
        try{
            const user = request.user.user.user_id;

            const message = await messageDataMapper.getMessageByUserId(user);
            if(!message){
                return next();
            }
            console.log("message", message.content);
            response.json({data : message})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async postAMessage(request, response, next){
        try{
            
            const { content, recipient } = request.body;
            const sender = request.user.user.user_id;
            
            const post = await messageDataMapper.postAMessage({ content, recipient, sender });      
    
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
