const express = require('express');
const router = express.Router();
const ApiItemController = require('../controllers/api/ApiItemController');

router.get('/',ApiItemController.items_list)

router.post('/create', ApiItemController.items_create)

router.get('/:id',ApiItemController.items_details)

router.delete('/:id',ApiItemController.items_delete)

module.exports = router;
