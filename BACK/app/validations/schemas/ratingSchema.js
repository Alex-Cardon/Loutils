const Joi = require('joi');

const newRatingSchema = Joi.object({
    /* Poster une annonce en tant qu'utilisateur connecté */
    ad_id: Joi.number().positive().integer().min(1).required(),
    rating: Joi.number().integer().min(1).max(5).required()
}).required();




module.exports = { newRatingSchema };

