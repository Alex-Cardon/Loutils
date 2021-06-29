const ratingDataMapper = require('../dataMapper/ratingDataMapper');

/**
 * @typedef Rating
 * @property {number} rated_by_user - Identifiant de l'utiliateur qui a donné la note
 * @property {number} rated_ad - Identifiant de l'annonce
 * @property {number} rating - La note donnée sur une echelle de 1 à 5
 * @property {string} created_at - Date de création (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour (date ISO 8601)
  */

/**
 * @typedef RatingInput 
 * @property {number} rated_by_user - Identifiant de l'utiliateur qui a donné la note
 * @property {number} rated_ad - Identifiant de l'annonce
 * @property {number} rating - La note donnée sur une echelle de 1 à 5
 * */


module.exports = {

    /**
     * Noter une annonce en tant qu'utilisateur connecté
     * @param {number} ad_id - Id de l'annonce
     * @param {number} rating - Note 
     * @returns {object} L'utilisateur qui a mis la note, l'annonce qui a reçu la note, la note, la date de création et la date de mise à jour
     */
    async ratingAnAd(req, res) { 
        try {
            const user_id = req.user.user.user_id;

            if(!user_id){
                return res.status(401).json({
                    msg: "Veuillez vous connecter afin de voir l'annonce"
                  });
            };
            const ad_id = req.params.id
            const { rating } = req.body;

            if(rating < 1 || rating > 5) res.status(400).json({ error: "rating can not be less than 1 and more than 5" });
            
            const exist = await ratingDataMapper.ratexist(user_id, ad_id);
            if(exist.length !== 0){
                const result = await ratingDataMapper.updateRating(user_id, ad_id, rating);
                res.status(200).json({ data : result });
            } else {
                const result = await ratingDataMapper.ratingAd(user_id, ad_id, rating);
                res.status(200).json({ data : result });
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    /**
     * Récupérer la moyenne d'une annonce
     * @param {number} ad_id - Id de l'annonce
     * @returns {object[]} La note moyenne de l'annonce
     */
    async getAVGRating(req, res) {
        try {
            const ad_id = req.bparams.id;
            const result = await ratingDataMapper.getAVGRating(ad_id);
            res.status(200).json({ data : result });
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    async updateRating(req, res) {
        try {
            const ad_id = req.params.id;
            const user_id = req.user.user.user_id;
            const { rating } = req.body;
            if(rating < 1 || rating > 5) res.status(400).json({ error: "rating can not be less than 1 and more than 5" });
            const result = await ratingDataMapper.updateRating(user_id, ad_id, rating);
            res.status(200).json({ data : result });
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    }
}