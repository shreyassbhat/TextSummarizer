const express = require('express');

const summarycontroller = require('../controllers/summarry'); 
const router = express.Router();

router.post('/summary',summarycontroller.sumposts);


module.exports = router;