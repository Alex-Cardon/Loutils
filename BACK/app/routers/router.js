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



router.get('/randads',adController.getRandAds)/*ok */;
        
router.get('/categories', categoryController.getCategories)/*ok */;


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
        .get(authorization, messageController.getRecievedMsgByUserId)/*ok */
        .post(authorization, messageController.postAMessage)/*ok */;
router.route('/outbox')
        .get(authorization, messageController.getSenderMessageByUserId);

router.route('/messages/:id(\\d+)')
        .delete(authorization, messageController.deleteAMessage);

router.post('/register', validUserInfo, userController.register)/*ok */;

router.post('/login', validUserInfo, userController.login)/*ok */;

router.get('/search', adController.searchAds)/*ok */;

router.get('/ad/:id(\\d+)', adController.getAdById)/*ok */;

router.route('/account/settings')
        .get(authorization, userController.getUserInfo)/*ok */
        .patch(authorization, validUserSettings, userController.patchUserInfo)/*ok */
        .delete(authorization, userController.deleteAccount)/*ok */;

router.patch('/account/settings/password', authorization, validUserSettings, userController.patchUserPassword)/*ok */;

router.route('/savedResearch')
        .get(authorization, savedResearch.getSavedResearch)/*ok */
        .post(authorization, savedResearch.addNewResearch)/*ok */;

router.route('/savedResearch/:id(\\d+)')
        .patch(authorization, savedResearch.updateSavedResearch)/*ok */
        .delete(authorization, savedResearch.deleteSavedResearch)/*ok */;

router.route('/ad/rating')
        .get(ratingController.getAVGRating)
        .post(authorization, ratingController.ratingAnAd);

router.route('/booking')
        .get(bookingController.getBooking)
        .post(authorization, bookingController.boonking)
        .delete(authorization, bookingController.removeBooking);


router.use(errorController.resourceNotFound);


module.exports = router;