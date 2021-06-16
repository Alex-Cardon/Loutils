const Joi = require('joi');

const postMessageSchema = Joi.object({

    content: Joi.string().min(5).required()

}).required();

module.exports = { postMessageSchema };