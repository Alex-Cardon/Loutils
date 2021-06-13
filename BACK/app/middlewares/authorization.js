
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = function(req, res, next) {
  const token = req.header("token");

  try {
      if (!token) {
        return res.status(403).json({ msg: "Accès non autorisé" });
      }
    const verify = jwt.verify(token, process.env.JWTSECRET);
    console.log('verify', verify);
    req.user = verify;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token non valide" });
  }
};