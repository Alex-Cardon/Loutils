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
const adminController = require('../controllers/adminController');
const modoContoller = require('../controllers/modoContoller');
const downloadController = require('../controllers/downloadController');
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');
const { upload } = require('../middlewares/upload');

const router = express.Router();


// 
// const imageUpload = multer({
//         storage : multer.diskStorage({
//         dest: 'public',
//         }),
//         
// });

/**
 * Récupération des radius prédéfinis
 * @route GET /radius
 * @returns {adController[]} 200 - Les radius dans un tableau
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/radius', adController.radiusArray);

/**
 * Récupération la liste des rôles
 * @route GET /rolist
 * @returns {adminController[]} 200 - Le Tableau des rôles
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/rolist', adminController.roleList);


/**
 * Récupération de 10 annonces aléatoires en tant que visiteur
 * @route GET /randads
 * @returns {adController[]} 200 - Les annonces avec leur id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/randads', adController.getRandAds);

/**
 * Afficher les catégories
 * @route GET /categories
 * @returns {categoryController[]} 200 - Les catégories avec leur identifiant, nom et date de création
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/categories', categoryController.getCategories);

/**
 * poster une image
 * @route POST /image
 * @param {object} image - L'image que l'on souhaite charger
 * @returns {pictureController} 200 - l'identifiant de l'image, le nom du fichier, l'emplacement du fichier, le mimetype, la taille et la date de création
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 404 - Une erreur redirigeant vers la page 404
 */
router.post('/image', upload.single('file'), pictureController.postImage);

/**
 * Afficher une image
 * @route GET /image/:filename
 * @param {string} filename - Titre de la photo
 * @returns {pictureController} 200 - L'image
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 405 - Une erreur indiquant que l'image n'existe pas
 */
router.get('/image/:filename',  pictureController.getImage);


router.route('/account/ads')

        /**
         * Récupération les annonces d'un utilisateur connecté
         * @route GET /account/ads
         * @returns {adController[]} 200 - Les annonces avec leur id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 403 - Une erreur indiquant que l'accès n'est pas autorisé'
         */
        .get( authorizationLvl1, adController.getByUserId)

        /**
         * Poster une annonce en tant qu'utilisateur connecté
         * @route POST /account/ads
         * @param {string} title - Titre de l'annonce
         * @param {number} picture_id - Id de la photo de l'annonce
         * @param {number} price - Prix de location de l'outil 
         * @param {string} product_state - Etat de l'outil
         * @param {number} deposit - Montant de la caution
         * @param {string} description - Description de l'outil
         * @param {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
         * @param {number} postcode - Ville où se situe l'outil
         * @param {number} category_id - La catégorie dans laquelle l'outil se situe
         * @returns {adController} 200 - Les annonces avec leur id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         *  @returns {Error} 400 - Une erreur indiquant qu'il faut remplir les champs du formulaire'
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire'
         */
        .post(validate.body(schemas.insertAdSchema), authorizationLvl1, adController.postAnAd);


router.route('/account/ad/:id(\\d+)')

        /**
         * Modifier une annonce en tant qu'utilisateur connecté
         * @route PATCH /account/ad/:id
         * @param {number} id id de l'annonce
         * @param {string} title - Titre de l'annonce
         * @param {number} picture_id - Id de la photo de l'annonce
         * @param {number} price - Prix de location de l'outil 
         * @param {string} product_state - Etat de l'outil
         * @param {number} deposit - Montant de la caution
         * @param {string} description - Description de l'outil
         * @param {string} title - Titre de l'annonce
         * @param {string} ad_type - Si l'outil est disponible à la location ou si quelqu'un cherche un outil
         * @param {number} postcode - Ville où se situe l'outil
         * @param {number} category_id - La catégorie dans laquelle l'outil se situe
         * @returns {adController[]} 200 - L'annonce modifiée avec son id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
         */
        .patch(validate.body(schemas.updateAdSchema), authorizationLvl1, adController.patchAd)

        /**
         * Supprimer une annonce en tant qu'utilisateur connecté
         * @route DELETE /account/ad/:id
         * @param {number} id id de l'annonce
         * @returns {adController} 200 - Un message indiquant que l'annonce a bien été supprimée
         * @returns {Error} 500 - Une erreur serveur
         */
        .delete( authorizationLvl1, adController.deleteAnAd);



/**
 * Afficher les annonces mises en favori par l'utilisateur connecté
 * @route GET /bookmarks
 * @returns {bookmarkController} 200 - L'identifiant de l'annonce, son titre, l'identifiant de la photo, le prix, l'état, la caution, la description, le type d'annonce, la code postal, l'identifiant de la catégorie, l'identifiant de l'utilisateur, la date de création, la date de mise à jour
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire
 * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu'
 */
router.get('/bookmarks', authorizationLvl1, bookmarkController.getBookmarksById);

router.route('/bookmarks/:id(\\d+)')
        /**
         * Ajouter une annonce en favori en tant qu'utilisateur connecté
         * @route POST /bookmarks/:id
         * @param {number} id - id de l'annonce
         * @returns {bookmarkController} 200 - L'identifiant de l'annonce, l'identifiant de l'utilisateur et la date de création
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu'
         */
        .post(authorizationLvl1, bookmarkController.addBookmark)

        /**
         * Supprimer une annonce en favori en tant qu'utilisateur connecté
         * @route DELETE /bookmarks/:id
         * @param {number} id - id de l'annonce
         * @returns {bookmarkController} 200 - Un message indiquant que le favori est supprimé
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu'
         */
        .delete( authorizationLvl1, bookmarkController.deleteBookmark);

router.route('/messages')

        /**
         * Afficher les messages reçu par l'utilisateur connecté
         * @route GET /messages
         * @returns {messageController[]} 200 - L'identifiant du message, le contenu, la personne qui reçoit le message, la personne qui envoit le message, la date de création, la date de mise à jour, booleen pour savoir si le message a été lu
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire
         */
        .get(authorizationLvl1, messageController.getRecievedMsgByUserId)

        /**
         * Poster un message en tant qu'utilisateur connecté
         * @route POST /messages
         * @param {string} content - Contenu du message
         * @param {number} recipient - Identifiant unique de la personne qui reçoit le message
         * @param {number} ad_id - Identifiant unique de l'annonce à laquelle fait référence le message'
         * @returns {messageController} 200 - L'identifiant du message, le contenu, la personne qui reçoit, la personne qui envoit, la date de création, la date de mise à jour et si le message a été lu ou non
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire
         */
        .post(validate.body(schemas.messagePostMessageSchema), authorizationLvl1, messageController.postAMessage);

router.route('/outbox')
        /**
         * Afficher les messages envoyés par l'utilisateur connecté
         * @route GET /outbox
         * @returns {messageController[]} 200 - L'identifiant du message, le contenu, la personne qui reçoit le message, la personne qui envoit le message, la date de création, la date de mise à jour, booleen pour savoir si le message a été lu
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que les deux mots de passe sont différents
         */
        .get(authorizationLvl1, messageController.getSenderMessageByUserId);

router.route('/messages/:id(\\d+)')


        /**
         * Voir si le message a été lu
         * @param {number} id - Id du message
         * @returns {object} Un message indiquant que le message est marqué comme lu
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant du message est inconnu
         */
        .post(authorizationLvl1, messageController.hasBeenRead)
        /**
         * Supprimer un message que l'utilisateur connecté a supprimé
         * @route DElETE /messages/:id
         * @param {number} id - Id du message
         * @returns {messageController} 200 - Un message indiquant que le message a bien été supprimé
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant du message est inconnu
         */
        .patch( authorizationLvl1, messageController.deleteAMessage);

/**
 * Créer un compte
 * @route POST /register
 * @param {string} name - Nom de l'utilisateur
 * @param {string} email - Adresse mail de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @param {string} confirmPassword - Confirmer le mot de passe de l'utilisateur
 * @returns {userController} 200 - Un message indiquant que le compte a bien été crée et qu'un email de confirmation a été envoyé. 
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 401 - Une erreur indiquant que les deux mots de passe sont différents
 * @returns {Error} 409 - Une erreur indiquant que l'utilisateur existe déjà
 */
router.post('/register', validUserInfo, userController.register);
/**
 * Se connecter
 * @route POST /login
 *  @param {string} email - Adresse mail de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @returns {userController} 200 - le nom de l'utilisateur et token
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 401 - Une erreur indiquant que la combinaison mail/mdp n'est pas correct
 */
router.post('/login', validUserInfo, userController.login);


/**
 * Rechercher une/des annonces qui correspond(ent) aux critères entrés dans la barre de recherche
 * @route GET /search
 * @param {string} title - Titre de l'annonce
 * @param {number} category - La catégorie dans laquelle l'outil se situe
 * @param {number} postcode - Ville où se situe l'outil
 * @param {number} radius - Périmètre autour du code postal jusqu'où l'utilisateur recherche
 * @returns {adController[]} 200 - Les annonces qui correspondent aux critères saisis
 * @returns {Error} 500 - Une erreur serveur
 *  @returns {Error} 400 - Une erreur indiquant que l'utilisateur doit saisir un code postal
 */
router.post('/search', validate.body(schemas.searchAdSchema), adController.searchAds);


/**
 * Récupérrer une annonce en tant que visiteur
 * @route GET /ad/:id
 * @param {number} id - Id de l'annonce
 * @returns {adController[]} 200 - L'annonce avec son id, titre, id de l'image, prix, l'état, la caution, le type d'annonce, le code postal, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
 * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
 */
router.get('/ad/:id(\\d+)', adController.getAdById);

router.route('/account/settings')
        /**
         * Récupération des informations d'un utilisateur connecté
         * @route GET /account/settings
         * @returns {userController[]} 200 - Le nom et l'email de l'utilisateur
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
         */
        .get(authorizationLvl1, userController.getUserInfo)

        /**
         * Modifier les informations d'un utilisateur connecté
         * @route PATCH /account/settings
         *  @param {string} name - Nom de l'utilisateur
         * @param {string} email - Adresse mail de l'utilisateur
         * @returns {userController} 200 - Message indiquant que le compte a bien été modifié
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
         */
        .patch(validate.body(schemas.updateAInfoSchema), authorizationLvl1, validUserSettings, userController.patchUserInfo)

        /**
         * Supprimer son compte
         * @route DELETE /account/settings
         * @returns {userController[]} 200 - L'utilisateur modifié avec son identifiant, son nom, son email, son mot de passe crypté, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         */
        .delete(authorizationLvl1, userController.deleteAccount);

/**
 * Modifier le mot de passe d'un utilisateur connecté
 * @route PATCH /account/settings/password
 * @param {string} password - L'ancien mot de passe de l'utilisateur
 * @param {string} newPassword - Le nouveau mot de passe de l'utilisateur
 * @returns {userController} 200 - Message indiquant que le mot de passe a bien été modifié
 *  @returns {Error} 400 - Une erreur indiquant que le mot de passe est incorrect
 *  @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
 * @returns {Error} 500 - Une erreur serveur
 */
router.patch('/account/settings/password', validate.body(schemas.updateAPasswordSchema), authorizationLvl1, validUserSettings, userController.patchUserPassword);

router.route('/savedResearch')

        /**
         * Récupération des recherches enregistrées d'un utilisateur connecté
         * @route GET /savedResearch
         * @returns {savedSearchController[]} 200 - Les recherches avec leur id,code postal, titre, rayon, identifiant de la catégorie, identifiant de l'utilisateur, date de création et date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
         */
        .get(authorizationLvl1, savedResearch.getSavedResearch)

        /**
         * Enregistrer une nouvelle recherche
         * @route POST /savedResearch
         * @param {number} id - Identifiant unique
         * @param {number} postcode - Code postal
         * @param {string} title - Titre de l'annonce
         * @param {number} radius - Rayon accepté autour du code postal 
         * @param {number} category_id - Identifiant de la catégorie
         * @returns {savedSearchController} 200 - L'idendifiant de la sauvegarde, le code postal, le rayon, l'identifiant de la catégorie, l'identifiant de l'utilisateur, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
         * @returns {Error} 404 - Une erreur redirigeant vers la page 404
         */
        .post(validate.body(schemas.newASavedSearchSchema), authorizationLvl1, savedResearch.addNewResearch);

router.route('/savedResearch/:id(\\d+)')
        /**
         * Modifier une recherche sauvegardée en tant qu'utilisateur connecté
         * @route PATCH savedResearch/:id
         * @param {number} postcode - Code postal
         * @param {string} title - Titre de l'annonce
         * @param {number} radius - Rayon accepté autour du code postal 
         * @param {number} category_id - Identifiant de la catégorie
         * @returns {savedSearchController[]} 200 - La recherche modifiée avec son id, code postal, titre, rayon, l'id de la catégorie, l'id de l'utilisateur, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce n'existe pas
         */
        .patch(validate.body(schemas.updateASavedSearchSchema), authorizationLvl1, savedResearch.updateSavedResearch)
        /**
         * Supprimer une recherche sauvegardée en tant qu'utilisateur connecté
         * @route DELETE savedResearch/:id
         * @param {number} id - Id de la recherche
         * @returns {savedSearchController} 200 - Un message indiquant que la recherche a bien été supprimée
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce n'existe pas
         */
        .delete( authorizationLvl1, savedResearch.deleteSavedResearch);

router.route('/ad/rating')

        /**
         * Récupérer la moyenne d'une annonce
         * @route GET /ad/rating
         * @param {number} ad_id - Id de l'annonce
         * @returns {ratingController[]} 200 - La note moyenne de l'annonce
         * @returns {Error} 500 - Une erreur serveur
         */
        .get(validate.body(schemas.avgRatingASchema), ratingController.getAVGRating)


        /**
         * Noter une annonce en tant qu'utilisateur connecté
         * @route POST /ad/rating
         * @param {number} ad_id - Id de l'annonce
         * @param {number} rating - Note 
         * @returns {ratingController} 200 - L'utilisateur qui a mis la note, l'annonce qui a reçu la note, la note, la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 400 - Une erreur indiquant que la note doit se situer entre 1 et 5 inclus
         * @returns {Error} 401 - Une erreur indiquant que l'accès n'est pas autorisé et que la connexion est nécessaire'
         */
        .post(validate.body(schemas.newRatingASchema), authorizationLvl1, ratingController.ratingAnAd);


router.route('/booking')

        /**
         * Voir les dates à laquelle l'annonce est réservée
         * @route GET /booking
         *     @param {number} ad_id - Identifiant de l'annonce
         * @returns {bookingController[]} 200 - Les réservations avec l'id de la réservation, le début, la fin, l'id de l'utilisateur, l'id de l'annonce, la date de création et de modification
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
         */
        .get( bookingController.getBooking)

        /**
         * Réserver un outil en tant qu'utilisateur connecté
         * @route POST /booking
         *     @param {string} begining - Date de début de la location (date ISO 8601)
         * @param {string} end - Date de fin de la location (date ISO 8601)
         * @param {number} ad_id - Identifiant de l'annonce
         * @returns {bookingController[]} 200 - L'annonce réservée avec sa date de début, sa date de fin, avec son id, l'id de l'utilisateur qui a réservé et la date de création et la date de mise à jour
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 400 - Une erreur indiquant un problème de date de réservation dû à une incohérence ou une date déjà bookée.
         * @returns {Error} 401 - Une erreur indiquant que l'utilisateur doit se connecter
         */
        .post(validate.body(schemas.newBookingASchema), authorizationLvl1, bookingController.boonking)

        /**
         * Supprimer une réservation en tant qu'utilisateur connecté
         * @route DELETE /booking
         * @param {number} id - Id de la réservation
         * @returns {bookingController} 200 - Un message indiquant que la réservation a bien été supprimée
         * @returns {Error} 500 - Une erreur serveur
         */
        .delete( authorizationLvl1, bookingController.removeBooking);



/**
 * Confirmer la création du compte
 * @route GET /confirmation/:token
 * @returns {userController} 200 - Quand l'utilisateur a cliqué sur le lien de confirmation, un objet de ce type apparaît dans la page du navigateur : {"confirmed":[{"name":"Stacy"}]}
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 403 - Une erreur indiquant que l'accès n'est pas autorisé
 * @returns {Error} 404 - Une erreur indiquant que le token est invalide
 */
router.get('/confirmation/:token', userController.emailConfirm); //ok

/**
 * Recevoir de nouveau un mail de confirmation
 * @route POST /resendconfirm
 * @param {string} email - Adresse mail de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @returns {userController} 200 - Un message indiquant qu'un email de confirmation a été envoyé. 
 * @returns {Error} 500 - Une erreur serveur
 * @returns {Error} 401 - Une erreur indiquant que le mots de passe est érroné.
 * @returns {Error} 409 - Une erreur indiquant que l'utilisateur est déjà confirmé.
 */
router.post('/resendconfirm',  userController.reSendConf);

router.post('/forgpass', userController.forgPassword);

router.get('/passchange/:token', userController.emailConfirmPassChange);

router.post('/finalpasswordchange', userController.patchUserPassword);

/**
 * Afficher les annonces non filtrées
 * @route GET /modo
 * @returns {modoController[]} 200 - La liste des annonces avec  leur identifiant de l'annonce et son titre
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/modo', authorizationLvl2, modoContoller.getAllNonModAd);

router.route('/modo/:id')

        /**
         * Récupérrer une annonce et ses informations
         * @route GET /modo/:id
         * @param {number} id - Identifiant de l'annonce
         * @returns {modoController[]} 200 - L'identifiant de l'annonce, son titre, l'identifiant de la photo, son prix, son état, sa caution, sa description, son type, code postal, catégorie, l'identifiant de l'utilisateur, date de création, date de mise à jour, si elle a été modérée
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
         */
        .get(authorizationLvl2, modoContoller.getOneAd)

        /**
         * Autoriser une annonce
         * @route POST /modo/:id
         * @param {number} id - Identifiant de l'annonce
         * @returns {modoController[]} 200 - L'identifiant de l'annonce, son titre, l'identifiant de la photo, son prix, son état, sa caution, sa description, son type, code postal, catégorie, l'identifiant de l'utilisateur, date de création, date de mise à jour, si elle a été modérée
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
         */
        .post(authorizationLvl2, modoContoller.moderate)

        /**
         * Supprimer une annonce en tant que modérateur
         * @route DELETE /modo/:id
         * @param {number} id - Id de l'annonce
         * @returns {modoController} 200 - Un message indiquant que l'annonce a bien été supprimée
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'annonce est inconnu
         */
        .delete(authorizationLvl2, modoContoller.deleteAd);

/**
 * Récupération la liste des utilisateurs
 * @route GET /admin/users
 * @returns {modoController[]} 200 - Les utilisateurs avec leur id, nom, email et rôle
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/admin/users', authorizationLvl3, adminController.getAllUsers);

/**
 * Récupération la liste des roles
 * @route GET /rolist
 * @returns {adminController[]} 200 - Tableau des rôles
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/rolist',authorizationLvl3, adminController.roleList);

router.route('/admin/user/:id')
        /**
         * Récupération d'un utilisateur
         * @route GET /admin/user/:id
         * @param {number} id - Id de l'utilisateur
         * @returns {adminController[]} 200 - L'identifiant de l'utilisateur, son nom, son rôle, son email, si son email a été confirmé
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'utilisateur est inconnu
         */
        .get(authorizationLvl3, adminController.getOneUser)


        /**
         * Modifier un rôle d'un utilisateur en tant qu'admin
         * @route PATCH /admin/user/:id
         * @param {id} id - Id du compte 
         * @param {string} role - Role que l'on souhaite attribuer à l'utilisateur
         * @returns {adminController} 200 - Le nom et le rôle
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'utilisateur ou le rôle est inconnu
         */
        .patch(authorizationLvl3, validate.body(schemas.modifyARoleAdmin), adminController.userRole)

        /**
         * Supprimer un utilisateur en tant qu'administrateur
         * @route DELETE /admin/user/:id
         * @param {id} id - Id du compte 
         * @returns {adminController} 200 - Message de confirmation indiquant que l'utilisateur a bien été supprimé
         * @returns {Error} 500 - Une erreur serveur
         * @returns {Error} 405 - Une erreur indiquant que l'identifiant de l'utilisateur est inconnu
         */
        .delete(authorizationLvl3,adminController.deleteOneUser);

/**
 * Téléchargement du contrat type de location entre particuliers
 * @route GET /download
 * @returns {Document.pdf} 200 - Document PDF
 * @returns {Error} 500 - Une erreur serveur
 */
router.get('/download', downloadController.downloadFile)



router.use(errorController.resourceNotFound);


module.exports = router;
