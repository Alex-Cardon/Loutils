const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {
    async moderate(req, res) {
        try {
            const id = req.params.id;
            const result = await adDataMapper.moderated(id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

    async deleteAd(req, res) {
        try {
            const id = req.params.id;
            const result = await adDataMapper.deleteAd(id);
            res.status(200).json({ msg: 'annonce supprimée' });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

    async getAllNonModAd(req, res) {
        try {
            const result = await adDataMapper.getAllNonModAd();
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

    async getOneAd(req, res) {
        try {
            const id = req.params.id;
            const result = await adDataMapper.ModofindById(id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }

}