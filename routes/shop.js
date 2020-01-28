const express = require('express');
const shopRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', shopRoutes.getProducts);
router.get('/product/:id', shopRoutes.getProductById);

module.exports = router