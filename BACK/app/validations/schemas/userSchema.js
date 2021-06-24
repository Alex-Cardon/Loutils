const Joi = require('joi');

const insertSchema = Joi.object({
    //Créer un compte
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().min(2).required(),
    confirmPassword: Joi.string().min(2).required(),
}).required();

const loginSchema = Joi.object({
    //login
    email: Joi.string().email().required(),
    password: Joi.string().min(2).required()
}).required();


const updateInfoSchema = Joi.object({
    //Modifier les informations d'un utilisateur connecté
    name: Joi.string().min(3),
    email: Joi.string().email()
}).required();

const updatePasswordSchema = Joi.object({
    //Modifier les informations d'un utilisateur connecté
    password: Joi.string().min(2).required(),
    newPassword: Joi.string().min(2).required()
}).required();


module.exports = { insertSchema, loginSchema, updateInfoSchema, updatePasswordSchema };