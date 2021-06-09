const express = require('express');

const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const controllerFactory = require('../controllers/controllerFactory');
const userController = require('../controllers/authorController');
const errorController = require('../controllers/errorController');

const router = express.Router();

router.route('/subscribe')
    .post(validate.body(schemas.insertUser), controllerFactory.add('user'));


