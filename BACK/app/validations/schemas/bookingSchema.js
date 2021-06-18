const Joi = require('joi');

const newBookingSchema = Joi.object({
    /* Réserver un outil en tant qu'utilisateur connecté */
    begining: Joi.date().iso().required(),
    end: Joi.date().iso().required(),
    ad_id: Joi.number().positive().integer().required()
}).required();

const removeBookingSchema = Joi.object({
    // supprimer une annonce
    id: Joi.number().integer().positive().min(1).required()
}).required();

const getBookingSchema = Joi.object({
    // Voir les dates à laquelle l'annonce est réservée
    id: Joi.number().integer().positive().min(1).required()
}).required();


module.exports = { insertSchema };

