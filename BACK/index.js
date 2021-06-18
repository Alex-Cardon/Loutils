require('dotenv').config();
const cors = require('cors');

const morgan = require('morgan');
const express = require('express');

const router = require('./app/routers/router');


const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
   swaggerDefinition: {
       info: {
           description: 'Loutils permet de mettre en relation des particuliers pour se louer leurs outils',
           title: 'Loutils',
           version: '1.0.0',
       },
       host: 'localhost:3000',
       basePath: '/api',
       produces: [
           "application/json"
       ],
       schemes: ['http', 'https'],
       securityDefinitions: {
       }
   },
   basedir: __dirname, //app absolute path
   files: ['./app/routers/*.js', './app/dataMapper/*.js'] //Path to the API handle folder
};
expressSwagger(options);



const port = process.env.PORT || `3000`;

app.use(express.json());
app.use(cors());


app.use(router);


app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});