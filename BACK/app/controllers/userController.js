const userDataMapper = require('../dataMapper/userDataMapper');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');


/**
 * @typedef User
 * @property {number} id - Identifiant unique
 * @property {string} name - Nom de l'utilisateur
 * @property {string} email - Adresse mail de l'utilisateur
 * @property {string} password - Mot de passe de l'utilisateur
 * @property {string} created_at - Date de création (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour (date ISO 8601)
  */

/**
 * @typedef UserInput
 * @property {string} name - Nom de l'utilisateur
 * @property {string} email - Adresse mail de l'utilisateur
 * @property {string} password - Mot de passe de l'utilisateur
 */

module.exports = {

    /**
     * Créer un compte
     * @property {string} name - Nom de l'utilisateur
     * @property {string} email - Adresse mail de l'utilisateur
     * @property {string} password - Mot de passe de l'utilisateur
     * @returns {object} un message indiquant que le compte a bien été créé
     */
  async register(req, res) {
    try {
      
      const { name, email, password } = req.body;
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
      //generate jwt
      const token = await jwtGenerator(newUser.id, newUser.role)
      return res.status(200).json({
        'msg': 'Votre compte a bien été créé.',
        token
      })
    } catch (error) {
      console.log(error);
    }


  },

      /**
     * Se connecter à son compte
     * @property {string} email - Adresse mail de l'utilisateur
     * @property {string} password - Mot de passe de l'utilisateur
     * @returns {object} le nom de l'utilisateur et token
     */
  async login(req, res) {

    try {
      const { email, password } = req.body;

      //check user exist
      const userFound = await userDataMapper.findOneByEmail(email);

      if(!userFound) return res.status(401).json({'error': 'Adresse mail ou mot de passe incorrect'})

      //check password
      const validPassword = await bcrypt.compare(password, userFound.password);
      
      if(!validPassword) res.status(401).json({'error': 'Adresse mail ou mot de passe incorrect'})

      //generate jwt
      const token = await jwtGenerator(userFound.id, userFound.role)

      return res.status(200).json({
        'name': `${userFound.name}`,
        token
      })

    } catch (error) {
      console.log(error);
    }
  },

    /**
     * Récupération des informations d'un utilisateur connecté
     * @returns {object[]} Le nom et l'email de l'utilisateur
     */
  async getUserInfo(req, res, next){
    try{
        const info = await userDataMapper.getAccountInformations(req.user.user.user_id);
        res.json({data : info})

    }catch (error) {
        console.trace(error);
        res.json({ error });
    }
  },

    /**
     * Modifier les informations d'un utilisateur connecté
     * @property {string} name - Nom de l'utilisateur
     * @property {string} email - Adresse mail de l'utilisateur
     * @returns {object[]} L'utilisateur modifié avec son identifiant, son nom, son email, son mot de passe crypté, la date de création et la date de mise à jour
     */
  async patchUserInfo(req, res){
    try {
      const id = req.user.user.user_id;
      const { name, email } = req.body;
      const result = await userDataMapper.patchUserInfo(id, name, email);
      if(result){
        res.json({result})
      }
    } catch (error) {
      console.trace(error);
      res.json(error)
    }
  },

      /**
     * Modifier le mot de passe d'un utilisateur connecté
      * @property {string} password - L'ancien mot de passe de l'utilisateur
      * @property {string} newPassword - Le nouveau mot de passe de l'utilisateur
     * @returns {object} Message indiquant que le mot de passe a bien été modifié
     */
  async patchUserPassword(req, res) {
    try {
      const { password, newPassword } = req.body;
      const id = req.user.user.user_id;
      
      const userFound = await userDataMapper.findOneById(id);
      
      //check password
      const validPassword = await bcrypt.compare(password, userFound.password);
      if(!validPassword) res.status(401).json({'error': 'Mot de passe incorrect'});

       //hashing password
       const saltRounds = 10;
       const salt = await bcrypt.genSalt(saltRounds);
       const hashPassword = await bcrypt.hash(newPassword, salt);
      const result = await userDataMapper.patchUserPassword(hashPassword, id);

      if(result){
        res.json({"msg": "Mot de passe changé avec succès"})
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
    if(!result) {
      res.json({"msg": "Fail to delete"})
    };
    res.json({ "msg" : "Account deleted"})
    } catch (error) {
      console.trace(error)
      res.json(error)
    }
    
  }


}