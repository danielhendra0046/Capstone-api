const express = require('express');
const database = require('./database');
const router = express();


router.get('/', (req, res) => {
    res.send(database);
});



module.exports = router;