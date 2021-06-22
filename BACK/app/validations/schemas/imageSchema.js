const Joi = require('joi');

const getImageSchema = Joi.object({
    //Afficher une image
    filename: Joi.string().required().min(3)
}).required();


module.exports = { getImageSchema };