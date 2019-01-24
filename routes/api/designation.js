const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.get('/test', 
(req, res) => res.json({
    msg: 'Designation works'
}));

module.exports = router;