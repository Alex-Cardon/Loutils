const Joi = require('joi');


/*const regex = /0[1-9]\d{3}|[1-8]\d{4}|97[1-68]\d{2}|98[678]\d{2}|9[0-6]\d{3}/;

const schema = Joi.object({
  postCode: Joi.string()
}).rename(regex, 'postCode');

await schema.validateAsync({ PostCode: 'a'});
*/


const addAnAdSchema = Joi.object({

    title: Joi.string().required().min(5),
    picture: Joi.string().dataUri().required(),
    price: Joi.number().integer().required(),
    product_state: Joi.string().required().min(3),
    deposit: Joi.number().integer().required(),
    description: Joi.string().required().min(20),
    ad_type: Joi.string().min(4).required(),
    rating: Joi.number().integer(),
    postcode: Joi.number().integer().positive().precision(5).required()
}).required();

const addAResearchSchema = Joi.object({

    postcode: Joi.number().integer().positive().precision(5).required(),
    title: Joi.string().required().min(5),
    radius: Joi.number().integer().required().min(1).max(2)
}).required();

const updateAResearchSchema = Joi.object({

    postcode: Joi.number().integer().positive().precision(5).required(),
    title: Joi.string().required().min(5),
    radius: Joi.number().integer().required().min(1).max(2),
    category_id: Joi.number().integer().required()
}).required();


module.exports = { addAnAdSchema, addAResearchSchema, updateAResearchSchema};