const Joi = require('joi');

const postMessageSchema = Joi.object({

    content: Joi.string().required().min(5).required()
}).required();

module.exports = { postMessageSchema };