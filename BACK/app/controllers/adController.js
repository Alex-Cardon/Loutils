const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {

    async getByUserId(request, response, next){
        try{
            const ad = await adDataMapper.findByUserId(request.params.id);
            if(!ad){
                return next();
            }
            response.json({data : ad})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async postAnAd(request, response, next){
        try{

            const { title, picture_id, price,product_state, deposit, description, ad_type, rating, postcode, category_id } = request.body;

            const user_id = request.user.user.user_id

            const post = await adDataMapper.
            postAnAd(title, picture_id, price,product_state, deposit, description, ad_type, rating, postcode, category_id, user_id);
            
    
            if(!post){
                return next();
            }
    
            response.json({data : post})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },

    async patchAd(req, res){
        try {
            const { title, picture_id, price,product_state, deposit, description, ad_type, rating, postcode, category_id } = req.body;
            const id = req.params.id
            const result = await adDataMapper.updateAd(title, picture_id, price,product_state, deposit, description, ad_type, postcode, category_id, id);

            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },


    async searchAds(req, res) {

        try {
            let {
                postcode,
                radius
            } = req.body;
            if (radius === "0") {
                radius = "1";
            };
            const listPC = await adDataMapper.fetchCP(postcode, radius);
            const full_arr_pc = [];
            if (Array.isArray(listPC)) {
                for (const cp of listPC) {
                    full_arr_pc.push(cp.code_postal)
                }
            } else {
                for (const prop in listPC) {
                    full_arr_pc.push(listPC[prop].code_postal)
                }
            }
            const trimmed_cp = [...new Set(full_arr_pc)];
            const {
                category,
                title
            } = req.body;

            if (!category) {
                const result = await adDataMapper.getByTitle(title, trimmed_cp)
                res.json({
                    result
                });
            } else {
                const result = await adDataMapper.getByTitleAndCat(category, trimmed_cp, title);
                res.json({
                    result
                });
            }
        } catch (error) {
            console.trace(error);
            res.json({
                error
            });
        }
    },

    async deleteAnAd (request, response, next) {
        try{
            const id = request.params.id;
            const result = await adDataMapper.deleteOneAd(id);

            response.json({"msg" : "annonce supprimée"});
        }catch(error){
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    async getAdById(req, res) {
        try {
            const id = req.params.id;
            const result = await adDataMapper.findById(id);
            res.status(200).json({ result });
        } catch (error) {
            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
        }
    },

    async getRandAds(req, res) {
        try {
            const result = await adDataMapper.getTenAds();
            res.status(200).json({ result });
        } catch (error) {

            console.trace(error);
            response.status(500).json({ error: `Server error, please contact an administrator` });
            
        }
    }
};