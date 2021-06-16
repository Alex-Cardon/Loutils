const Joi = require('joi');

const insertSchema = Joi.object({

    title: Joi.string().min(3),
    price: Joi.number().integer().required(),
    picture_id: Joi.string(),
    product_state: Joi.string().required().min(3),
    deposit: Joi.number().integer().required(),
    description: Joi.string().required().min(20),
    ad_type: Joi.string().min(4).required(),
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    category_id: Joi.number().integer().required()
}).required();

const updateSchema = Joi.object({

    title: Joi.string().min(3),
    price: Joi.number().integer().required(),
    product_state: Joi.string().required().min(3),
    deposit: Joi.number().integer().required(),
    description: Joi.string().required().min(20),
    ad_type: Joi.string().min(4).required(),
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    category_id: Joi.number().integer().required()
}).required();


module.exports = { insertSchema };

