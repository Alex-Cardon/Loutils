const express = require('express');

const userController = require('../controllers/userController');
const authorizationLvl1 = require('../middlewares/authorizationLvl1');
const authorizationLvl2 = require('../middlewares/authorizationLvl2');
const authorizationLvl3 = require('../middlewares/authorizationLvl3');
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
const radiusController = require('../controllers/radiusController');
const modoContoller = require('../controllers/modoContoller');

const schemas = require('../validations/schemas');
const validate = require('../validations/validate');

const router = express.Router();
const maxSize = 1 * 1000 * 1000;
const multer = require('multer');
const imageUpload = multer({
        dest: 'data/images',
        limits: { fileSize: maxSize }
    });

router.get('/radius', radiusController.radiusList);

router.get('/randads',adController.getRandAds)/* JSDOC ok */;
        
router.get('/categories', categoryController.getCategories)/*JSDOC ok */;


router.post('/image', imageUpload.single('image'), pictureController.postImage);/*JSDOC */

router.get('/image/:filename', pictureController.getImage); /*JSDOC*/


router.route('/account/ads')
        .get(authorizationLvl1, adController.getByUserId)/*JSDOC ok + ok */
        .post(authorizationLvl1, adController.postAnAd)/*JSDOC ok + ok */;


router.route('/account/ad/:id(\\d+)')
        .patch(authorizationLvl1, adController.patchAd)/*JSDOC ok + ok */
        .delete(authorizationLvl1, adController.deleteAnAd)/*JSDOC ok + ok */;

router.get('/bookmarks', authorizationLvl1, bookmarkController.getBookmarksById)/*JSDOC ok */;

router.route('/bookmarks/:id(\\d+)')
        .post(authorizationLvl1, bookmarkController.addBookmark)/*JSDOC ok */
        .delete(authorizationLvl1, bookmarkController.deleteBookmark)/*JSDOC ok */;

router.route('/messages')
        .get(authorizationLvl1, messageController.getRecievedMsgByUserId)/*ok */
        .post(authorizationLvl1, messageController.postAMessage)/*ok */;
router.route('/outbox')
        .get(authorizationLvl1, messageController.getSenderMessageByUserId);

router.route('/messages/:id(\\d+)')
        .delete(authorizationLvl1, messageController.deleteAMessage)/*ok */;


router.post('/register', validUserInfo, userController.register)/*JSDOC ok */;

router.post('/login', validUserInfo, userController.login)/*JSDOC ok */;

router.get('/search', adController.searchAds)/*JSDOC ok */;

router.get('/ad/:id(\\d+)', adController.getAdById)/*JSDOC ok */;

router.route('/account/settings')

        .get(authorizationLvl1, userController.getUserInfo)/*ok */
        .patch(authorizationLvl1, validUserSettings, userController.patchUserInfo)/*ok */
        .delete(authorizationLvl1, userController.deleteAccount)/*ok */;

router.patch('/account/settings/password', authorizationLvl1, validUserSettings, userController.patchUserPassword)/*ok */;

router.route('/savedResearch')
        .get(authorizationLvl1, savedResearch.getSavedResearch)/*ok */
        .post(authorizationLvl1, savedResearch.addNewResearch)/*ok */;

router.route('/savedResearch/:id(\\d+)')
        .patch(authorizationLvl1, savedResearch.updateSavedResearch)/*ok */
        .delete(authorizationLvl1, savedResearch.deleteSavedResearch)/*ok */;

router.route('/ad/rating')
        .get(ratingController.getAVGRating)/*ok */
        .post(authorizationLvl1, ratingController.ratingAnAd)/*ok */;


router.route('/booking')
        .get(bookingController.getBooking)/*JSDOC ok */
        .post(authorizationLvl1, bookingController.boonking)/*JSDOC ok */
        .delete(authorizationLvl1, bookingController.removeBooking)/*JSDOC ok */;

router.get('/confirmation/:token', userController.emailConfirm); //ok

router.get('/modo', authorizationLvl2, modoContoller.getAllNonModAd);

router.route('/modo/:id')
        .get(authorizationLvl2, modoContoller.getOneAd)
        .post(authorizationLvl2, modoContoller.moderate)
        .delete(authorizationLvl2, modoContoller.deleteAd);

router.use(errorController.resourceNotFound);


module.exports = router;
