const Joi = require('joi');

const postMessageSchema = Joi.object({
//Poster un message en tant qu'utilisateur connecté
    content: Joi.string().min(5).required(),
    recipient: Joi.number().integer().positive().min(1).required(),
    ad_id: Joi.number().integer().positive().min(1).required()
}).required();

const removeMessageSchema = Joi.object({
// supprimer un message
    id: Joi.number().integer().positive().min(1).required()
}).required();

module.exports = { postMessageSchema, removeMessageSchema };


