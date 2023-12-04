const express = require('express');
const app = express();
const sql = require('mssql2');

const dbConfig = {
    "user": "root",
    "password": "",
    "server": "localhost",
    "database": "hobby"
};

const port = 5000;

app.get('/login', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`listening on port ${port}!`));