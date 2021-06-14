const userDataMapper = require('../dataMapper/userDataMapper');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');


module.exports = {
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


  async getUserInfo(req, res, next){
    try{
      console.log(req.user.user.user_id);
        const info = await userDataMapper.getAccountInformations(req.user.user.user_id);
        res.json({data : info})

    }catch (error) {
        console.trace(error);
        res.json({ error });
    }
  },

  async patchUserInfo(req, res){
    try {
      const id = req.user.user.user_id;
      const { name, email, phone } = req.body;
      const result = await userDataMapper.patchUserInfo(id, name, email, phone);
      if(result){
        res.json({result})
      }
    } catch (error) {
      console.trace(error);
      res.json(error)
    }
  },

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