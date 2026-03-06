const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

app.use('/', require('./routes'))


app.listen(PORT, () => {
    console.log(`Web Server is listening at http://localhost:${PORT}`);
});