const express = require('express');

const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const adController = require('../controllers/adController');
const errorController = require('../controllers/errorController');

const router = express.Router();

/*Accéder à la liste de mes annonces*/
router.route('/account/:id/ads')
    .get(adController.getByUserId);



router.use(errorController.resourceNotFound);

module.exports = router;