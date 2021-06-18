const express = require('express');

const userController = require('../controllers/userController');
const authorization = require('../middlewares/authorization');
const validUserInfo = require('../middlewares/validUserInfo');
const adController = require('../controllers/adController');
const bookmarkController = require('../controllers/bookmarkController');
const messageController = require('../controllers/messageController');
const savedResearch = require('../controllers/savedSearchController');
const categoryController = require('../controllers/categoryController');
const errorController = require('../controllers/errorController');
const validUserSettings = require('../middlewares/validUserSettings');
const ratingController = require('../controllers/ratingController');
const pictureController = require('../controllers/pictureController');
const bookingController = require('../controllers/bookingController');

const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

const router = express.Router();
const maxSize = 1 * 1000 * 1000;
const multer = require('multer');
const imageUpload = multer({
        dest: 'data/images',
        limits: { fileSize: maxSize }
    });



router.get('/randads',adController.getRandAds)/* JSDOC ok */;
        
router.get('/categories', categoryController.getCategories)/*JSDOC ok */;


router.post('/image', imageUpload.single('image'), pictureController.postImage);/*JSDOC */

router.get('/image/:filename', pictureController.getImage); /*JSDOC*/


router.route('/account/ads')
        .get(authorization, adController.getByUserId)/*JSDOC ok + ok */
        .post(authorization, adController.postAnAd)/*JSDOC ok + ok */;


router.route('/account/ad/:id(\\d+)')
        .patch(authorization, adController.patchAd)/*JSDOC ok + ok */
        .delete(authorization, adController.deleteAnAd)/*JSDOC ok + ok */;

router.get('/bookmarks', authorization, bookmarkController.getBookmarksById)/*JSDOC ok */;

router.route('/bookmarks/:id(\\d+)')
        .post(authorization, bookmarkController.addBookmark)/*JSDOC ok */
        .delete(authorization, bookmarkController.deleteBookmark)/*JSDOC ok */;

router.route('/messages')
        .get(authorization, messageController.getRecievedMsgByUserId)/*JSDOC ok */
        .post(authorization, messageController.postAMessage)/*JSDOC ok */;
router.route('/outbox')
        .get(authorization, messageController.getSenderMessageByUserId)/*JSDOC*/;

router.route('/messages/:id(\\d+)')
        .delete(authorization, messageController.deleteAMessage)/*JSDOC ok */;

router.post('/register', validUserInfo, userController.register)/*JSDOC ok */;

router.post('/login', validUserInfo, userController.login)/*JSDOC ok */;

router.get('/search', adController.searchAds)/*JSDOC ok */;

router.get('/ad/:id(\\d+)', adController.getAdById)/*JSDOC ok */;

router.route('/account/settings')
        .get(authorization, userController.getUserInfo)/*JSDOC ok */
        .patch(authorization, validUserSettings, userController.patchUserInfo)/*JSDOC ok */
        .delete(authorization, userController.deleteAccount)/*ok */;

router.patch('/account/settings/password', authorization, validUserSettings, userController.patchUserPassword)/*JSDOC ok */;

router.route('/savedResearch')
        .get(authorization, savedResearch.getSavedResearch)/*JSDOC ok */
        .post(authorization, savedResearch.addNewResearch)/*JSDOC ok */;

router.route('/savedResearch/:id(\\d+)')
        .patch(authorization, savedResearch.updateSavedResearch)/*JSDOC ok */
        .delete(authorization, savedResearch.deleteSavedResearch)/*JSDOC ok */;

router.route('/ad/rating')
        .get(ratingController.getAVGRating)/*JSDOC ok */
        .post(authorization, ratingController.ratingAnAd)/*JSDOC ok */;

router.route('/booking')
        .get(bookingController.getBooking)/*JSDOC ok */
        .post(authorization, bookingController.boonking)/*JSDOC ok */
        .delete(authorization, bookingController.removeBooking)/*JSDOC ok */;

router.get('/confirmation/:token', userController.emailConfirm); //ok

router.use(errorController.resourceNotFound);


module.exports = router;