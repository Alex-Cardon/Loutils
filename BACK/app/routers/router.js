const express = require('express');

const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const adController = require('../controllers/adController');
const bookmarkController = require('../controllers/bookmarkController');
const messageController = require('../controllers/messageController');
const errorController = require('../controllers/errorController');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
router.route('/account/:id/ads')
        .get(adController.getByUserId);


router.route('/bookmarks/:id')
        .get(bookmarkController.getBookmarksById);

router.route('/account/:id/messages')
        .get(messageController.getMessageByUserId);

router.use(errorController.resourceNotFound);

module.exports = router;