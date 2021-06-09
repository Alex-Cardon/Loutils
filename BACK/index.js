if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');

const apiRouter = require('./app/routers/router');

const app = express();

const port = process.env.PORT || `3000`;

app.use(express.json());

app.use('/', router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});