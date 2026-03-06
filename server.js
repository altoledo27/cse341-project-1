const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./db/database');
const app = express();

const PORT = process.env.PORT || 8080;
dotenv.config();

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
