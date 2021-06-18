const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = function(req, res, next) {
  const token = req.header("token");

  try {
      if (!token) {
        return res.status(403).json({ msg: "Accès non autorisé" });
      };
    const verify = jwt.verify(token, process.env.JWTSECRET);
    if(verify.user.confirmed && (verify.user.role == 'user'
     || verify.user.role == 'modo' 
     || verify.user.role == 'admin')){
      req.user = verify;
      next();
    } else {
      throw new Error("Email not confirmed, please check your mail box and click the confirmation link first")
    }
  } catch (err) {
    res.status(401).json({ err });
  }
};