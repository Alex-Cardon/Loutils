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
const searchController = require('../controllers/searchController');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
/*router.route('/account/:id')
        .get(userController.getAccountInformations)*/


router.route('/account/:id/ads')
        .get(adController.getByUserId)
        .post(adController.postAnAd);


router.route('/bookmarks/:id')
        .get(bookmarkController.getBookmarksById)
        .post(bookmarkController.addBookmark);

router.route('/account/:id/messages')
        .get(messageController.getMessageByUserId)
        .post(messageController.postAMessage);

router.post('/register', validUserInfo, userController.register);
router.post('/login', validUserInfo, userController.login);
router.get('/test', authorization, userController.test)

router.get('/search', searchController.research);

router.use(errorController.resourceNotFound);


module.exports = router;