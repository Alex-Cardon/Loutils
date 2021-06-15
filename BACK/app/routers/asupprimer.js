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
const { request, response } = require('express');

const router = express.Router();

/*Accéder à la liste de mes annonces (titre et contenu) */
/*router.route('/account/:id')
        .get(userController.getAccountInformations)*/








/*image et BDD, sorry pour la place prise et le non rangement, dès que ça fonctionne nickel je bouge tout ça*/        

const path = require('path');
const multer = require('multer');
const knex = require('knex');

const db = knex (
        {
                client: 'pg',
                connection:{
                        host: '127.0.0.1',
                        user: process.env.PGUSER,
                        password: process.env.PGPASSWORD,
                        database: process.env.PGDATABASE,
                },
        }
);

const imageUpload = multer ({
    dest: 'data/images',
});

router.post('/image', imageUpload.single('image'), (request, response) => {
        const { filename, mimetype, size } = request.file;
        const filepath = request.file.path;

        db
                .insert({
                        filename,
                        filepath,
                        mimetype,
                        size,
                })
                .into('image_files')
                .then(() => response.json({success: true, filename}))
                .catch(error => response.json({
                        success: false,
                        message: 'upload failed',
                        stack: error.stack,
                }));
});

router.get('/image/:filename', (request, response) => {
        const { filename } = request.params;
        db
                .select('*')
                .from('image_files')
                .where({filename})
                .then(images => {
                        if(images[0]){
                                const dirname = path.resolve();
                                const fullfilepath = path.join( dirname, 
                                        images[0].filepath);
                                return response
                                        .type(images[0].mimetype)
                                        .sendFile(fullfilepath);
                        }
                        return Promise.reject(new Error("L'image n'existe pas"));
                })
                .catch(error => response
                        .status(404)
                        .json({
                                success: false,
                                message: 'Not found',
                                stack: error.stack,
                        }),
                );


        /*const dirname = path.resolve();
        const fullfilepath = path.join(dirname, 'images/' + filename);
        return response.sendFile(fullfilepath);*/
}); 









/*FIN DU BORDEL */







router.route('/account/ads')
        .get(authorization, adController.getByUserId)
        .post(authorization, adController.postAnAd);


router.route('/account/ad/:id')
        .patch(authorization, adController.patchAd)
        .delete(authorization, adController.deleteAnAd);

router.get('/bookmarks', authorization, bookmarkController.getBookmarksById);

router.route('/bookmarks/:id')
        .post(authorization, bookmarkController.addBookmark)
        .delete(authorization, bookmarkController.deleteBookmark);

router.route('messages')
        .get(authorization, messageController.getMessageByUserId)
        
router.route('messages/:id')
        .post(authorization, messageController.postAMessage)
        .delete(authorization, messageController.deleteAMessage);

router.post('/register', validUserInfo, userController.register);

router.post('/login', validUserInfo, userController.login);

router.route('/account/settings')
        .get(authorization, userController.getUserInfo)
        .patch(authorization, validUserSettings, userController.patchUserInfo)
        .delete(authorization, userController.deleteAccount);

router.patch('/account/settings/password', authorization, validUserSettings, userController.patchUserPassword);


router.get('/search', adController.searchAds);

router.route('/savedResearch')
        .post(authorization, adController.addNewResearch);

router.route('/savedResearch/:id')
        .patch(authorization, adController.updateSavedResearch)
        .delete(authorization, adController.deleteSavedResearch);

router.use(errorController.resourceNotFound);


module.exports = router;