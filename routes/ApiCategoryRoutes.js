const express = require('express');
const router = express.Router();
const ApiCategoryController = require('../controllers/api/ApiCategoryController');

router.get('/',ApiCategoryController.category_list)

router.post('/create', ApiCategoryController.category_create)

router.get('/:id',ApiCategoryController.category_details)

router.delete('/:id',ApiCategoryController.category_delete)

module.exports = router;
