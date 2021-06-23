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
    async getSenderMessageByUserId(req, res, next){
        try{
            const user = req.user.user.user_id;

            if(!user){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };

            const message = await messageDataMapper.getSenderMessageByUserId(user);
            if(!message){
                return next();
            }
            res.json({ msg_sent: message })

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    /**
     * Afficher les messages reçu par l'utilisateur connecté
     * @returns {object[]} L'identifiant du message, le contenu, la personne qui reçoit le message, la personne qui envoit le message, la date de création, la date de mise à jour, booleen pour savoir si le message a été lu
     */
    async getRecievedMsgByUserId(req, res, next){
        try{
            const user = req.user.user.user_id;

            if(!user){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };

            const message = await messageDataMapper.getRecievedMsgByUserId(user);
            if(!message){
                return next();
            }
            res.json({ msg_recieved: message })

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

       /**
     * Poster un message en tant qu'utilisateur connecté
     * @property {string} content - Contenu du message
     * @property {number} recipient - Identifiant unique de la personne qui reçoit le message
     * @returns {object} L'identifiant du message, le contenu, la personne qui reçoit, la personne qui envoit, la date de création, la date de mise à jour et si le message a été lu ou non
     */
    async postAMessage(req, res){
        try{
            
            const { content, recipient, ad_id } = req.body;

            const sender = req.user.user.user_id;
            
            const post = await messageDataMapper.postAMessage({ content, recipient, sender, ad_id });
    
            if(!post){
                return next();
            }
    
            res.json({data : post})

        }catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },



    /**
     * Supprimer un message que l'utilisateur connecté a supprimé
     * @param {number} id - Id du message
     * @returns {object} Un message indiquant que le message a bien été supprimé
     */
    async deleteAMessage(req, res)  {

        try {
            const user_id = req.user.user.user_id;
            const msg_id = req.params.id;
            const { sender_id } = req.body;

            if(!msg_id){
                res.status(405).json({
                    msg: "L'identifiant de du message est inconnu"
                  });
            };

            if(user_id !== sender_id) {
                await messageDataMapper.recipientDeleted(msg_id);
                res.json({"msg" : "message reçu, supprimé"});
            } else {
                await messageDataMapper.senderDeleted(msg_id);
                res.json({"msg" : "message envoyé, supprimé"});
            };

        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },


    /**
     * Voir si le message a été lu
     * @param {number} id - Id du message
     * @returns {object} Un message indiquant que le message est marqué comme lu
     */
    async hasBeenRead(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                res.status(405).json({
                    msg: "L'identifiant de du message est inconnu"
                  });
            };

            await messageDataMapper.hasBeenRead(id);
            res.status(200).json({ msg: "marqué comme lu" });

        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    }
}
