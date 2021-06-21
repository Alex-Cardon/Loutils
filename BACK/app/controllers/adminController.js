const userDataMapper = require('../dataMapper/userDataMapper');

module.exports = {

    async getAllUsers(_, res) {
        const result = await userDataMapper.getAllUsers();

        res.status(200).json({ result });
    },

    async getOneUser(req, res) {
        const id = req.params.id;
        const result = await userDataMapper.getAccountInformations(id);
        res.status(200).json({ result });
    }

}
