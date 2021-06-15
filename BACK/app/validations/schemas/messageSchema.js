const Joi = require('joi');

const postMessageSchema = Joi.object({

    content: Joi.string().required().min(20).required(),
    recipient: Joi.number().integer().required(),
    sender: Joi.number().integer().required()
}).required();

module.exports = { postMessageSchema };