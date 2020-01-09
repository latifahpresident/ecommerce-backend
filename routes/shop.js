const express = require('express');
const shopRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', shopRoutes.getProducts);

module.exports = router