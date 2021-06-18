const Joi = require('joi');

const newBookmarkSchema = Joi.object({
    /* Ajouter une annonce en favori en tant qu'utilisateur connecté */
    id: Joi.number().positive().integer().min(1).required()
}).required();

const removeBookmarkSchema = Joi.object({
    // supprimer une annonce en favori en tant qu'utilisateur connecté
    id: Joi.number().integer().positive().min(1).required()
}).required();


module.exports = { newBookmarkSchema, removeBookmarkSchema };

