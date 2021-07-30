const express = require('express');
const router = express.Router();
const ApiUserController = require('../controllers/api/ApiUsers');



router.post('/create', ApiUserController.user_create)
router.post('/login', ApiUserController.user_login)
router.get('/logout', ApiUserController.user_logout)

module.exports = router;