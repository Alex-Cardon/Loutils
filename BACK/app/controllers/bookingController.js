const bookingDataMapper = require('../dataMapper/bookingDataMapper');

/**
 * @typedef Booking
 * @property {number} id - Identifiant unique
 * @property {string} begining - Date de début de la location (date ISO 8601)
 * @property {string} end - Date de fin de la location (date ISO 8601)
 * @property {number} user_id - Identifiant de l'utilisateur qui fait la réservation
 * @property {number} ad_id - Identifiant de l'annonce
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
  */

/**
 * @typedef BookingInput
 * @property {string} begining - Date de début de la location (date ISO 8601)
 * @property {string} end - Date de fin de la location (date ISO 8601)
 * @property {number} user_id - Identifiant de l'utilisateur qui fait la réservation
 * @property {number} ad_id - Identifiant de l'annonce
 */

module.exports = {


     /**
     * Réserver un outil en tant qu'utilisateur connecté
    * @property {string} begining - Date de début de la location (date ISO 8601)
     * @property {string} end - Date de fin de la location (date ISO 8601)
    * @property {number} ad_id - Identifiant de l'annonce
     * @returns {object[]} L'annonce réservée avec sa date de début, sa date de fin, avec son id, l'id de l'utilisateur qui a réservé et la date de création et la date de mise à jour
     */
    async boonking(req, res) {
        try {
            const { begining, end, ad_id } = req.body;
            const user_id = req.user.user.user_id
            const today = new Date(Date.now());
            if(begining > end) res.status(400).json({ "error": "impossible de réserver sur une date postérieur à la date de fin" });
            if(begining < today.toISOString()) res.status(400).json({ "error": "impossible de réserver sur une date anterieur à la date du jour" });
            const testBooking = await bookingDataMapper.bookingTest(begining, end);
            if(testBooking.length !== 0) res.status(400).json({ "error": "impossible de réserver sur une date déjà réservée" });
            const result = await bookingDataMapper.newBooking(begining, end, user_id, ad_id);

            res.status(200).json({ result });
            
        } catch (error) {
            console.log(error);
        }
    },

        /**
     * Supprimer une réservation en tant qu'utilisateur connecté
     * @param {number} id - Id de la réservation
     * @returns {object} Un message indiquant que la réservation a bien été supprimée
     */
    async removeBooking(req, res) {
        try {
            const { id } = req.body;
            const result = await bookingDataMapper.deleteBooking(id);
            if(!result) res.status(500).json({ "error": "Erreur serveur, impossible de supprimer la réservation" });
            res.status(200).json({ "msg": "ok" })
        } catch (error) {
            console.log(error);
        }
    },

     /**
     * Voir les dates à laquelle l'annonce est réservée
    * @property {number} ad_id - Identifiant de l'annonce
     * @returns {object[]} Les réservations avec l'id de la réservation, le début, la fin, l'id de l'utilisateur, l'id de l'annonce, la date de création et de modification
     */
    async getBooking(req, res) {
        try {
            const { ad_id } = req.body;
            const result = await bookingDataMapper.getBooking(ad_id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
        }
    }

}