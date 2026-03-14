const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongodb = require('./db/database');
const app = express();

const PORT = process.env.PORT || 8080;
dotenv.config();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type.Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));


app.listen(PORT, () => {
    console.log(`Web Server is listening at http://localhost:${PORT}`);
});

mongodb.initDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error on: ', err);
});


