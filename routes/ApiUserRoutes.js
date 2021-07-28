const express = require('express');
const router = express.Router();
const ApiUserController = require('../controllers/api/ApiUsers');



router.post('/create', ApiUserController.user_create)


module.exports = router;