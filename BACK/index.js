require('dotenv').config();
const cors = require('cors');


const express = require('express');

const router = require('./app/routers/router');


const app = express();

const port = process.env.PORT || `3000`;

app.use(express.json());
app.use(cors());


app.use('/', router);


app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});