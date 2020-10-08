const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

//app.use('/', express.static('public'));

//const budget = require("./budgetData.json");

//app.get('/hello', (req, res) => {
//    res.send('hello world');
//});

app.get('/budget', (req, res) => {
    res.sendFile('budgetData.json', {root: __dirname});
});

app.listen(port, () => {
    console.log('API Served at http://localhost:3000');
});