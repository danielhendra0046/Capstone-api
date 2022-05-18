const express = require('express');
const database = require('./database');
const router = express();
//const Validator = require('fastest-validator');

// GET METHOD
router.get('/', (req, res) => {
    res.send(database);
});


// POST METHOD
router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'menambahkan produk',
    });
});

/*
const v = new Validator();

router.post('/', (req, res) => {
    const schema = {
        name: 'string',
        status: 'string'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    res.send('ok');
});
*/

// PUT METHOD
router.put('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'data berhasil diedit',
    });
});


module.exports = router;