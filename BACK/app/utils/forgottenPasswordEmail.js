require('dotenv').config;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {

    async sendForgPassEmail(id, role, email, confirmed) {
         // create transport
      const transporter = await nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      //création du payload
      const payload = {
        user: {
            user_id: id,
            role: role,
            confirmed: confirmed
        }};

       //create email token
       const emailToken = await jwt.sign(payload, process.env.JWTSECRETEMAIL, {
        expiresIn: 1200,
    });
       //create dynamic URL
       const url = `http://localhost:3000/passchange/${emailToken}`;

       //send email
       await transporter.sendMail({
             to: email,
             subject: 'Mot de passe oublié',
             html: `Merci de lire les instructions jusqu'au bout avant de cliquer sur ce lien et de vous connecter au site Loutils avec le mot de passe que vous pensez juste, puis de suivre les instruction pour le changement de mot de passe: <a href="${url}">${url}</a>`
           });
    }

}


     

     
