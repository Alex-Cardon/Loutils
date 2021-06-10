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

      return res.status(200).header("auth-token", token).json({
        'msg': `Bienvenue ${userFound.name}`,
        token
      })

    } catch (error) {
      console.log(error);
    }
  },

  async test(req, res) {
    res.json({'msg': 'it works!'})
  }
}