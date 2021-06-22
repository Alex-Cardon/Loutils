const userDataMapper = require('../dataMapper/userDataMapper');

module.exports = {

    /**
     * Récupération la liste des rôles
     * @returns {objet[]} Tableau des rôles
     */
    async roleList(_, res) {
        try {
            const roleList = ['user', 'modo', 'admin'];
            res.status(200).json({
                roleList
            });
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Récupération la liste des utilisateurs
     * @param {number} id - Id de l'utilisateur
     * @returns {object[]} Les utilisateurs avec leur id, nom, email et rôle
     */
    async getAllUsers(_, res) {

        try {
            const result = await userDataMapper.getAllUsers();
            res.status(200).json({
                result
            });
        } catch (error) {
            res.status(500).json({
                error: `Server error, please contact an administrator`
            });
        }
    },
    /**
     * Récupérer les informations d'un utilisateur
     * @param {number} id L'id de l'utilisateur en params 
     * @returns {objet[]} L'identifiant de l'utilisateur, son nom, son rôle, son email, si son email a été confirmé
     */
    async getOneUser(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'utilisateur est inconnu"
                  });
            };
            const result = await userDataMapper.findById(id);
            res.status(200).json({
                result
            });
        } catch (error) {
            res.status(500).json({
                error: `Server error, please contact an administrator`
            });
        }

    },

    /**
     * Supprimer un utilisateur en tant qu'administrateur
     * @param {number} id L'id de l'utilisateur en params  
     * @returns {object} Message de confirmation indiquant que l'utilisateur a bien été supprimé
     */
    async deleteOneUser(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'utilisateur est inconnu"
                  });
            };

            await userDataMapper.deleteUser(id);
            res.status(200).json({
                confirm: `User ${id} a été supprimé`
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: `Server error, please contact an administrator`
            });
        }

    },

        /**
     * Modifier un rôle d'un utilisateur en tant qu'admin
    * @param {id} id - Id du compte en params 
     * @param {string} role - Role que l'on souhaite attribuer à l'utilisateur
     * @returns {object} Le nom et le rôle
     */
    async userRole(req, res) {
        try {
            const id = req.params.id;
            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'utilisateur est inconnu"
                  });
            };
            const role = req.body.role;
            if(!role){
                return res.status(405).json({
                    msg: "Le rôle est inconnu"
                  });
            };
            const result = await userDataMapper.changeRole(id, role);
            res.status(200).json({
                result
            });
        } catch (error) {
            
            res.status(500).json({
                error: `Server error, please contact an administrator`
            });
        }
    }

}