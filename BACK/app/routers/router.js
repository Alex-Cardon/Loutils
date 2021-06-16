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
const ratingController = require('../controllers/ratingController');
const { request, response } = require('express');
const pictureController = require('../controllers/pictureController');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
/*router.route('/account/:id')
        .get(userController.getAccountInformations)*/
router.get('/randads',adController.getRandAds);
        
router.get('/categories', categoryController.getCategories);
   

const multer = require('multer');
const imageUpload = multer({
        dest: 'data/images',
    });

router.post('/image', imageUpload.single('image'), pictureController.postImage);

router.get('/image/:filename', pictureController.getImage); 

router.route('/account/ads')
        .get(authorization, adController.getByUserId)/*ok */
        .post(authorization, adController.postAnAd)/*ok */;

router.route('/account/ad/:id(\\d+)')
        .patch(authorization, adController.patchAd)/*ok */
        .delete(authorization, adController.deleteAnAd)/*ok */;

router.get('/bookmarks', authorization, bookmarkController.getBookmarksById)/*ok */;

router.route('/bookmarks/:id(\\d+)')
        .post(authorization, bookmarkController.addBookmark)/*ok */
        .delete(authorization, bookmarkController.deleteBookmark)/*ok */;

router.route('/messages')
        .get(authorization, messageController.getMessageByUserId)/*ok */
        .post(authorization, messageController.postAMessage)/*ok */;

router.route('/messages/:id(\\d+)')
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
        .get(authorization, savedResearch.getSavedResearch)/*ok */
        .post(authorization, savedResearch.addNewResearch)/*ok */;

router.route('/savedResearch/:id(\\d+)')
        .patch(authorization, savedResearch.updateSavedResearch)/*ok */
        .delete(authorization, savedResearch.deleteSavedResearch)/*ok */;

router.route('/ad/rating')
        .get(ratingController.getAVGRating)
        .post(authorization, ratingController.ratingAnAd);


router.use(errorController.resourceNotFound);


module.exports = router;