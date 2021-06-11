const adDataMapper = require ('../dataMapper/adDataMapper');

module.exports = {

    async getByUserId(request, response, next){
        try{
            const ad = await adDataMapper.findByPk(request.params.id);
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

            const { title, picture, price,product_state, deposit, description, ad_type, rating, postcode, category_id, user_id } = request.body;

            const post = await adDataMapper.
            postAnAd({ title, picture, price,product_state, deposit, description, ad_type, rating, postcode, category_id, user_id });
            
    
            if(!post){
                return next();
            }
    
            response.json({data : post})

        }catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
 
};