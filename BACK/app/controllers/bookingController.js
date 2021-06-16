const bookingDataMapper = require('../dataMapper/bookingDataMapper');

module.exports = {
    async boonking(req, res) {
        try {
            const { begining, end, ad_id } = req.body;
            const user_id = req.user.user.user_id;
            if(begining > end) res.status(400).json({ "error": "impossible de réserver sur une date postérieur à la date de fin" });
            if(begining < Date.now()) res.status(400).json({ "error": "impossible de réserver sur une date anterieur à la date du jour" });
            const testBooking = await bookingDataMapper.bookingTest(begining, end);
            console.log(testBooking);
           // if(testBooking.length == 0) res.status(400).json({ "error": "impossible de réserver sur une date déjà réservée" });
            const result = await bookingDataMapper.newBooking(user_id, begining, end, ad_id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
        }
    },

    async removeBooking(req, res) {
        try {
            const { id } = req.body;
            const result = await bookingDataMapper.deleteBooking(id);
            if(result) res.status(500).json({ "error": "Erreur serveur, impossible de supprimer la réservation" });
            res.status(200).json({ "msg": "ok" })
        } catch (error) {
            console.log(error);
        }
    },

    async getBooking() {
        try {
            const { ad_id } = req.body;
            const result = await bookingDataMapper.getBooking(ad_id);
            res.status(200).json({ result });
        } catch (error) {
            console.log(error);
        }
    }

}