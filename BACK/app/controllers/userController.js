const userDataMapper = require('../dataMapper/userDataMapper');
const bcrypt = require('bcrypt');
const mailConf = require('../utils/emailConfirmator');
const jwtGenerator = require('../utils/jwtGenerator');
const jwt = require("jsonwebtoken");



module.exports = {
  async register(req, res) {
    try {

      const {
        name,
        email,
        password
      } = req.body;
      const role = 'user';

      //check user exist
      const userFound = await userDataMapper.findOneByEmail(email);

      if (userFound) return res.status(409).json({
        'error': 'user already exist'
      });

      //hashing password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = await bcrypt.hash(password, salt);

      //create user
      const newUser = await userDataMapper.createUser(name, email, hashPassword, role)
      //confirmation email
      const mail = await mailConf.sendConfirm(newUser.id, newUser.role, newUser.email, newUser.confirmed);

      console.log('mail', mail);
      res.status(200).json("you will recieve email in a few minutes, check your inbox mail or spam")
    } catch (error) {
      console.log(error);
    }
  },

  async emailConfirm(req, res) {
    try {
      const token = req.params.token;
      if (!token) {
        return res.status(403).json({
          msg: "Accès non autorisé"
        });
      };
      const verify = jwt.verify(token, process.env.JWTSECRETEMAIL);
      if (!verify) res.status(404).json({
        msg: "invalid token"
      });
      const confirmed = await userDataMapper.confirmUser(verify.user.user_id);
      res.status(200).json({
        confirmed
      });
    } catch (error) {
      console.log(error);
    }
  },

  async login(req, res) {

    try {
      const {
        email,
        password
      } = req.body;

      //check user exist
      const userFound = await userDataMapper.findOneByEmail(email);

      if (!userFound) return res.status(401).json({
        'error': 'Adresse mail ou mot de passe incorrect'
      })

      //check password
      const validPassword = await bcrypt.compare(password, userFound.password);

      if (!validPassword) res.status(401).json({
        'error': 'Adresse mail ou mot de passe incorrect'
      })

      //generate jwt
      const token = await jwtGenerator(userFound.id, userFound.role, userFound.confirmed, 43200)

      return res.status(200).json({
        'name': `${userFound.name}`,
        token
      })

    } catch (error) {
      console.log(error);
    }
  },


  async getUserInfo(req, res, next) {
    try {
      const info = await userDataMapper.getAccountInformations(req.user.user.user_id);
      res.json({
        data: info
      })

    } catch (error) {
      console.trace(error);
      res.json({
        error
      });
    }
  },

  async patchUserInfo(req, res) {
    try {
      const id = req.user.user.user_id;
      const {
        name,
        email
      } = req.body;
      const result = await userDataMapper.patchUserInfo(id, name, email);
      if (result) {
        res.json({
          result
        })
      }
    } catch (error) {
      console.trace(error);
      res.json(error)
    }
  },

  async patchUserPassword(req, res) {
    try {
      const {
        password,
        newPassword
      } = req.body;
      const id = req.user.user.user_id;

      const userFound = await userDataMapper.findOneById(id);

      //check password
      const validPassword = await bcrypt.compare(password, userFound.password);
      if (!validPassword) res.status(401).json({
        'error': 'Mot de passe incorrect'
      });

      //hashing password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = await bcrypt.hash(newPassword, salt);
      const result = await userDataMapper.patchUserPassword(hashPassword, id);

      if (result) {
        res.json({
          "msg": "Mot de passe changé avec succès"
        })
      };

    } catch (error) {
      console.trace(error)
      res.json(error)
    }
  },

  async deleteAccount(req, res) {
    try {
      const id = req.user.user.user_id;
      const result = await userDataMapper.deleteUser(id);
      if (!result) {
        res.json({
          "msg": "Fail to delete"
        })
      };
      res.json({
        "msg": "Account deleted"
      })
    } catch (error) {
      console.trace(error)
      res.json(error)
    }

  }


}