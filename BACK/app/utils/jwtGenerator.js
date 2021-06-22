const jwt = require('jsonwebtoken');
require('dotenv').config();


function jwtGenerator(id, role, confirmed) {
    const payload = {
        user: {
            user_id: id,
            role: role,
            confirmed: confirmed
        }
    };
    return jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: "12h"
    });
}

module.exports = jwtGenerator;