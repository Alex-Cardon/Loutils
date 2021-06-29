const Joi = require('joi');

const insertSchema = Joi.object({
    /* Poster une annonce en tant qu'utilisateur connecté */
    title: Joi.string().required().min(3),
    picture_id: Joi.number().positive().integer().min(1).required(),
    price: Joi.number().positive().integer().required(),
    product_state: Joi.string().required().min(3),
    deposit: Joi.number().positive().integer().min(1).required(),
    description: Joi.string().required().min(20),
    //ad_type: Joi.string().min(4).required(),
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    category_id: Joi.number().positive().integer().min(1).required()
}).required();

const updateSchema = Joi.object({
    // Modifier une annonce en tant qu'utilisateur connecté
    title: Joi.string().min(3),
    picture_id: Joi.number().positive().integer().min(1).required(),
    price: Joi.number().positive().integer().min(1).required(),
    product_state: Joi.string().min(3),
    deposit: Joi.number().positive().integer().min(1).required(),
    description: Joi.string().min(20),
    //ad_type: Joi.string().min(4),
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/),
    category_id: Joi.number().positive().integer().min(1).required()
}).required();

const searchSchema = Joi.object({
    // Rechercher une/des annonces qui correspond(ent) aux critères entrés dans la barre de recherche
    title: Joi.string().required().min(3),
    category: Joi.string().min(4),
    postcode: Joi.string().regex(/0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/).required(),
    radius: Joi.number().integer().positive().min(0).max(50).required()
}).required();

const getByIdSchema = Joi.object({
    // Supprimer une annonce en tant qu'utilisateur connecté
    id: Joi.number().integer().positive().min(1).required()
}).required();

const getAdByIdSchema = Joi.object({
    // Récupérrer une annonce en tant que visiteur
    id: Joi.number().integer().positive().min(1).required()
}).required();


module.exports = { insertSchema, updateSchema, searchSchema, getByIdSchema, getAdByIdSchema };

