const userDataMapper = require('../dataMapper/userDataMapper');

module.exports = {

    /**
     * @returns {objet[]} Liste des rôles
     */
    async roleList() {
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
     * 
     * @return {object[]} Liste de toutes les utilisateurs 
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
     * 
     * @param {number} id L'id de l'utilisateur en params 
     * @returns {objet[]} Les détails de l'utilisateur
     */
    async getOneUser(req, res) {
        try {
            const id = req.params.id;
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
     * 
     * @param {number} id L'id de l'utilisateur en params  
     * @returns {object} Message de confirmation avec id de l'utilisateur 
     */
    async deleteOneUser(req, res) {
        try {
            const id = req.params.id;
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
     * 
     * @param {id} id Id du compte en params 
     * @param {string} role Role que l'on souhaite attribuer à l'utilisateur
     * @returns {object[]} Le nom et le rôle
     */
    async userRole(req, res) {
        try {
            const id = req.params.id;
            const role = req.body.role;
            console.log('role', role);
            console.log('id', id);
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