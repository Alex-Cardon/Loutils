require('dotenv').config;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {

    async sendConfirm(id, role, email, confirmed) {
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
       const url = `http://localhost:3000/confirmation/${emailToken}`;

       //send email
       await transporter.sendMail({
             to: email,
             subject: 'Confirmation Email',
             html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`
           });
    }

}


     

     
