const express = require('express');
const userController = require('../controllers/userController');
const authorization = require('../middlewares/authorization');
const validUserInfo = require('../middlewares/validUserInfo');

const router = express.Router();

router.post('/register', validUserInfo, userController.register);
router.post('/login', validUserInfo, userController.login);
router.get('/test', authorization, userController.test)

module.exports = router;