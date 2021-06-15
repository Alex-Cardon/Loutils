const express = require('express');
const userController = require('../controllers/userController');
const authorization = require('../middlewares/authorization');
const validUserInfo = require('../middlewares/validUserInfo');
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');
const adController = require('../controllers/adController');
const bookmarkController = require('../controllers/bookmarkController');
const messageController = require('../controllers/messageController');
const savedResearch = require('../controllers/savedSearchController');
const categoryController = require('../controllers/categoryController');
const errorController = require('../controllers/errorController');
const validUserSettings = require('../middlewares/validUserSettings');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
/*router.route('/account/:id')
        .get(userController.getAccountInformations)*/
router.get('/randads',adController.getRandAds);
        
router.get('/categories', categoryController.getCategories);

router.route('/account/ads')
        .get(authorization, adController.getByUserId)
        .post(validate.body(schemas.insertAdSchema), authorization, adController.postAnAd);


router.route('/account/ad/:id(\\d+)')
        .patch(authorization, adController.patchAd)
        .delete(authorization, adController.deleteAnAd);

router.get('/bookmarks', authorization, bookmarkController.getBookmarksById);

router.route('/bookmarks/:id(\\d+)')
        .post(authorization, bookmarkController.addBookmark)
        .delete(authorization, bookmarkController.deleteBookmark);

router.route('messages')
        .get(authorization, messageController.getMessageByUserId)
        
router.route('messages/:id(\\d+)')
        .post(authorization, messageController.postAMessage)
        .delete(authorization, messageController.deleteAMessage);

router.post('/register', validUserInfo, userController.register);

router.post('/login', validUserInfo, userController.login);

router.get('/search', adController.searchAds);

router.get('/ad/:id(\\d+)', adController.getAdById);

router.route('/account/settings')
        .get(authorization, userController.getUserInfo)
        .patch(authorization, validUserSettings, userController.patchUserInfo)
        .delete(authorization, userController.deleteAccount);

router.patch('/account/settings/password', authorization, validUserSettings, userController.patchUserPassword);

router.route('/savedResearch')
        .post(authorization, savedResearch.addNewResearch);

router.route('/savedResearch/:id(\\d+)')
        .patch(authorization, savedResearch.updateSavedResearch)
        .delete(authorization, savedResearch.deleteSavedResearch);

router.use(errorController.resourceNotFound);


module.exports = router;