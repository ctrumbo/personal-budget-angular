const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = [
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'rent',
        budget: 350
    },
    {
        title: 'groceries',
        budget: 90
    }
];

app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('example app listening at http://localhost:3000');
});