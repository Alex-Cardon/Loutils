const Joi = require('joi');

const getAdInfoModo = Joi.object({
    /* Récupérrer une annonce et ses informations */
    id: Joi.number().positive().integer().min(1).required()
}).required();

const authoriseAdInfoModo = Joi.object({
    /* autoriser une annonce */
    id: Joi.number().positive().integer().min(1).required()
}).required();

const deleteAdInfoModo = Joi.object({
    /* autoriser une annonce */
    id: Joi.number().positive().integer().min(1).required()
}).required();

module.exports = { getAdInfoModo, authoriseAdInfoModo, deleteAdInfoModo };

