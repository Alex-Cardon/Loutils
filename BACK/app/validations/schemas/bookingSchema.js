const Joi = require('joi');

const newBookingSchema = Joi.object({
    /* Réserver un outil en tant qu'utilisateur connecté */
    begining: Joi.date().iso().required(),
    end: Joi.date().iso().required(),
    ad_id: Joi.number().positive().integer().min(1).required()
}).required();

const removeBookingSchema = Joi.object({
    // Supprimer une réservation en tant qu'utilisateur connecté
    id: Joi.number().integer().positive().min(1).required()
}).required();

const getBookingSchema = Joi.object({
    // Voir les dates à laquelle l'annonce est réservée
    id: Joi.number().integer().positive().min(1).required()
}).required();


module.exports = { newBookingSchema, removeBookingSchema, getBookingSchema };

