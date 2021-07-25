const express = require('express');
const router = express.Router();

const TestController = require('../controllers/TestController');

router.get('/people', TestController.walid);

module.exports = router;
