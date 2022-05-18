const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req, res) => {
    res.send('hello');
});


app.listen(3000, () => console.log('Listening to 3000...'))



