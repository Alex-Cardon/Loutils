const ratingDataMapper = require('../dataMapper/ratingDataMapper');

module.exports = {

    async ratingAnAd(req, res) { 
        try {
            console.log("début controller");

            const user_id = req.user.user.user_id;

            const { ad_id, rating } = req.body;

            console.log("user_id ", user_id, "ad_id", ad_id, "rating", rating );

            if(rating < 1 || rating > 5) res.status(400).json({ "error": "rating can not be less than 1 and more than 5" });
            const exist = await ratingDataMapper.ratexist(user_id, ad_id);
            if(exist.length !== 0){
                const result = await ratingDataMapper.updateRating(user_id, ad_id, rating);
                res.status(200).json({ result });

                console.log("dans le if", "result ", result );

            } else {

                console.log("dans le else", "user_id ", user_id, "ad_id", ad_id, "rating", rating );

                const result = await ratingDataMapper.ratingAd(user_id, ad_id, rating);
                res.status(200).json({ result });

                console.log("dans le else", "result ", result );
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    async getAVGRating(req, res) {
        try {
            const { ad_id } = req.body;
            const result = await ratingDataMapper.getAVGRating(ad_id);
            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    async updateRating(req, res) {
        try {
            const user_id = req.user.user.user_id;
            const { ad_id, rating } = req.body;
            if(rating < 1 || rating > 5) res.status(400).json({ "error": "rating can not be less than 1 and more than 5" });
            const result = await ratingDataMapper.updateRating(user_id, ad_id, rating);
            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            res.status(500).json({ error: `Server error, please contact an administrator` });
        }
    }
}