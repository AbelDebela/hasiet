const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/test', 
(req, res) => res.json({
    msg: 'Payment works'
}));

module.exports = router;