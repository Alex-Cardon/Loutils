const Joi = require('joi');

const addAnAdSchema = Joi.object({

    title: Joi.string().required().min(5),
    picture: Joi.string().dataUri().required(),
    price: Joi.number().integer().required(),
    product_state: Joi.string().required().min(3),
    deposit: Joi.number().integer().required(),
    description: Joi.string().required().min(20),
    ad_type: Joi.string().min(4).required(),
    rating: Joi.number().integer(),
    postcode: Joi.number().integer().required().min(5).max(5),
    category_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required()
}).required();

const addAResearchSchema = Joi.object({

    postcode: Joi.number().integer().required().min(5).max(5),
    title: Joi.string().required().min(5),
    radius: Joi.number().integer().required().min(1).max(2),
    category_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required()
}).required();

const updateAResearchSchema = Joi.object({

    postcode: Joi.number().integer().required().min(5).max(5),
    title: Joi.string().required().min(5),
    radius: Joi.number().integer().required().min(1).max(2),
    category_id: Joi.number().integer().required()
}).required();


module.exports = { addAnAdSchema, addAResearchSchema, updateAResearchSchema};