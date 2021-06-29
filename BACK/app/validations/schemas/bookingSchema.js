const Joi = require('joi');

const newBookingSchema = Joi.object({
    /* Réserver un outil en tant qu'utilisateur connecté */
    begining: Joi.date().iso().required(),
    end: Joi.date().iso().required(),
}).required();

const removeBookingSchema = Joi.object({
    // Supprimer une réservation en tant qu'utilisateur connecté
    id: Joi.number().integer().positive().min(1).required()
}).required();



module.exports = { newBookingSchema, removeBookingSchema };

