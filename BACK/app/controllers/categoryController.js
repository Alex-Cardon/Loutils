const categoryDatamapper = require('../dataMapper/categoryDatamapper');

module.exports = {

    async getCategories(req, res) {
        try {
            const result = await categoryDatamapper.getCategories();
            res.status(200).json({ result })
        } catch (error) {
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }

    }
}