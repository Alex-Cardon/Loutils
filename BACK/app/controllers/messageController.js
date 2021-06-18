const messageDataMapper = require ('../dataMapper/messageDataMapper');

/**
 * @typedef Message
 * @property {number} id - Identifiant unique du message
 * @property {string} content - Contenu du message
 * @property {number} recipient - Identifiant unique de la personne qui reçoit le message
 * @property {number} sender - Identifiant unique de la personne qui envoit le message
 * @property {string} created_at - Date de création du message (date ISO 8601)
 * @property {string} updated_at - Date de la mise à jour du message (date ISO 8601)
 * @property {boolean} has_been_read - Si le message a été lu ou non
  */

/**
 * @typedef MessageInput
 * @property {string} content - Contenu du message
 * @property {number} recipient - Identifiant unique de la personne qui reçoit le message
 * @property {number} sender - Identifiant unique de la personne qui envoit le message
 * @property {boolean} has_been_read - Si le message a été lu ou non
 */

module.exports = {

    /**
     * Afficher les messages envoyés par l'utilisateur connecté
     * @returns {object[]} L'identifiant du message, le contenu, la personne qui reçoit le message, la personne qui envoit le message, la date de création, la date de mise à jour, booleen pour savoir si le message a été lu
     */
    async getSenderMessageByUserId(request, response, next){
        try{
            const user = request.user.user.user_id;

            const message = await messageDataMapper.getSenderMessageByUserId(user);
            if(!message){
                return next();
            }
            response.json({ message })

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    /**
     * Afficher les messages reçu par l'utilisateur connecté
     * @returns {object[]} L'identifiant du message, le contenu, la personne qui reçoit le message, la personne qui envoit le message, la date de création, la date de mise à jour, booleen pour savoir si le message a été lu
     */
    async getRecievedMsgByUserId(request, response, next){
        try{
            const user = request.user.user.user_id;

            const message = await messageDataMapper.getRecievedMsgByUserId(user);
            if(!message){
                return next();
            }
            response.json({ message })

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

       /**
     * Poster un message en tant qu'utilisateur connecté
     * @property {string} content - Contenu du message
     * @property {number} recipient - Identifiant unique de la personne qui reçoit le message
     * @returns {object} L'identifiant du message, le contenu, la personne qui reçoit, la personne qui envoit, la date de création, la date de mise à jour et si le message a été lu ou non
     */
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


        /**
     * Supprimer un message que l'utilisateur connecté a supprimé
     * @param {number} id - Id du message
     * @returns {object} Un message indiquant que le message a bien été supprimé
     */
    async deleteAMessage (request, response, next)  {

        try {
            const id = request.params.id;
            const result = await messageDataMapper.deleteAMessage(id);

            response.json({"msg" : "message supprimé"});
        } catch (error) {
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }
    }

}
