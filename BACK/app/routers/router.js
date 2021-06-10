const express = require('express');

const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const adController = require('../controllers/adController');
const bookmarkController = require('../controllers/bookmarkController');
const errorController = require('../controllers/errorController');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
router.route('/account/:id/ads')
        .get(adController.getByUserId);


router.route('/bookmarks/:id')
        .get(bookmarkController.getBookmarksById);


router.use(errorController.resourceNotFound);

module.exports = router;