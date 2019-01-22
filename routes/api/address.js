const express = require('express');
const router = express.Router();
const User = require('../../models/users');
const bcrypt = require('bcryptjs');

router.get('/test',
    (req,res) => res.json({
        msg: 'Address Works'
    })
);

mdule.exports = router;