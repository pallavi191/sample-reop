const express = require('express');
const router = express.Router();

router.use('/emp', require('./employee'));

module.exports = router;