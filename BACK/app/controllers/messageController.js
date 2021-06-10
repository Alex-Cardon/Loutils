const messageDataMapper = require ('../dataMapper/messageDataMapper');

module.exports = {

    async getMessageByUserId(request, response, next){
        try{
            const message = await messageDataMapper.getMessageByUserId(request.params.id);
            console.log(request.params.id);
            if(!message){
                return next();
            }
            console.log(message);
            response.json({data : message})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
 
}