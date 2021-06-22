const Joi = require('joi');

const getUserInfoAdmin = Joi.object({
    /* Récupérrer un utilisateur et ses informations */
    id: Joi.number().positive().integer().min(1).required()
}).required();

const modifyRoleAdmin = Joi.object({
    /* modifier le role d'un utilisateur ou d'un modo en tant qu'admin */
    id: Joi.number().positive().integer().min(1).required(),
    role : Joi.string().valid('admin').valid('modo').valid('user')
}).required();

const deleteUserAdmin = Joi.object({
    /* supprimer un utilisateur ent ant qu'admin */
    id: Joi.number().positive().integer().min(1).required()
}).required();

module.exports = { getUserInfoAdmin, modifyRoleAdmin, deleteUserAdmin };

