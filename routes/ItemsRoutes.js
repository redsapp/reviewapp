const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/items/ItemController');

router.get('/new',ItemController.items_new)
router.get('/:id',ItemController.items_details)


module.exports = router;
