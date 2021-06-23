const Joi = require('joi');

const newSavedSearchSchema = Joi.object({
    /* Poster une annonce en tant qu'utilisateur connecté */
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    title: Joi.string().required().min(3),
    radius: Joi.number().integer().positive().min(0).max(50).required(),
    category_id: Joi.number().positive().integer().min(1).required(),
}).required();

const updateSavedSearchSchema = Joi.object({
    /* Modifier une recherche sauvegardée en tant qu'utilisateur connecté */
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    title: Joi.string().required().min(3),
    radius: Joi.number().integer().positive().min(0).max(50).required(),
    category_id: Joi.number().positive().integer().min(1).required(),
}).required();

const deleteSavedSearchSchema = Joi.object({
    /* Supprimer une recherche sauvegardée en tant qu'utilisateur connecté */
    id: Joi.number().positive().integer().min(1).required()
}).required();



module.exports = { newSavedSearchSchema, updateSavedSearchSchema,  deleteSavedSearchSchema};

