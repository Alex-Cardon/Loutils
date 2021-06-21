const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {
        /**
     * Autoriser une annonce
     * @param {number} id - Identifiant de l'annonce
     * @returns {object[]} L'identifiant de l'annonce, son titre, l'identifiant de la photo, son prix, son état, sa caution, sa description, son type, code postal, catégorie, l'identifiant de l'utilisateur, date de création, date de mise à jour, si elle a été modérée
     */
    async moderate(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant est de l'annonce est inconnu"
                  });
            };

            const result = await adDataMapper.moderated(id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

        /**
     * Supprimer une annonce en tant que modérateur
     * @param {number} id - Id de l'annonce
     * @returns {object} Un message indiquant que l'annonce a bien été supprimée
     */
    async deleteAd(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant de l'annonce est inconnu"
                  });
            };

            const result = await adDataMapper.deleteAd(id);
            response.status(200).json({"msg" : "annonce supprimée"});
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

    /**
     * Afficher les annonces non filtrées
     * @returns {object[]} La liste des annonces avec  leur identifiant de l'annonce et son titre
     */
    async getAllNonModAd(req, res) {
        try {
            const result = await adDataMapper.getAllNonModAd();
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    },

            /**
     * Récupérrer une annonce et ses informations
     * @param {number} id - Identifiant de l'annonce
     * @returns {object[]} L'identifiant de l'annonce, son titre, l'identifiant de la photo, son prix, son état, sa caution, sa description, son type, code postal, catégorie, l'identifiant de l'utilisateur, date de création, date de mise à jour, si elle a été modérée
     */
    async getOneAd(req, res) {
        try {
            const id = req.params.id;

            if(!id){
                return res.status(405).json({
                    msg: "L'identifiant est inconnu"
                  });
            };

            const result = await adDataMapper.ModofindById(id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }

}