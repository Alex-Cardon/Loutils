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
const validUserSettings = require('../middlewares/validUserSettings');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
/*router.route('/account/:id')
        .get(userController.getAccountInformations)*/


router.route('/account/ads')
        .get(authorization, adController.getByUserId)
        .post(authorization, adController.postAnAd);

        router.patch('/account/ads/:id', authorization, adController.patchAd);

 router.get('/bookmarks', authorization, bookmarkController.getBookmarksById);

router.route('/bookmarks/:id')
        .post(authorization, bookmarkController.addBookmark)
        .delete(authorization, bookmarkController.deleteBookmark);

router.route('/account/:id/messages')
        .get(messageController.getMessageByUserId)
        .post(messageController.postAMessage);

router.post('/register', validUserInfo, userController.register);

router.post('/login', validUserInfo, userController.login);

router.route('/account/settings')
        .get(authorization, userController.getUserInfo)
        .patch(authorization, validUserSettings, userController.patchUserInfo)
        .delete(authorization, userController.deleteAccount);

router.patch('/account/settings/password', authorization, validUserSettings, userController.patchUserPassword);

router.get('/search', adController.searchAds);

router.use(errorController.resourceNotFound);


module.exports = router;