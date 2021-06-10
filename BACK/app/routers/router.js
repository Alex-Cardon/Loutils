const express = require('express');

const userController = require('../controllers/userController');
const authorization = require('../middlewares/authorization');
const validUserInfo = require('../middlewares/validUserInfo');





const schemas = require('../validations/schemas');

const validate = require('../validations/validate');
const adController = require('../controllers/adController');
const bookmarkController = require('../controllers/bookmarkController');
const messageController = require('../controllers/messageController');
const errorController = require('../controllers/errorController');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
router.route('/account/:id/ads')
        .get(adController.getByUserId)
        .post(adController.postAnAd);


router.route('/bookmarks/:id')
        .get(bookmarkController.getBookmarksById);

router.route('/account/:id/messages')
        .get(messageController.getMessageByUserId);

router.post('/register', validUserInfo, userController.register);
router.post('/login', validUserInfo, userController.login);
router.get('/test', authorization, userController.test)

router.use(errorController.resourceNotFound);


module.exports = router;