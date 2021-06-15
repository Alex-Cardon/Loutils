const Joi = require('joi');

const insertSchema = Joi.object({

    name: Joi.string().required().min(3),
    mail: Joi.string().email().required(),
    password: Joi.string().min(2).required(),
    phone_number: Joi.number().min(10)
}).required();

const loginSchema = Joi.object({

    mail: Joi.string().email().required(),
    password: Joi.string().min(2).required()
}).required();


const updateSchema = Joi.object({

    name: Joi.string().min(3),
    mail: Joi.string().email(),
    password: Joi.string().min(2),
    phone_number: Joi.number().min(10)
}).required();

module.exports = { insertSchema, updateSchema, loginSchema };