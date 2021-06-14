const jwt = require('jsonwebtoken');
require('dotenv').config();


function jwtGenerator(id, role) {
    const payload = {
        user: {
            user_id: id,
            role: role
        }
    };



    return jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: "4h"
    });
}

module.exports = jwtGenerator;