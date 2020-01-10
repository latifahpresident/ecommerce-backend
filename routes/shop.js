const express = require('express');
const shopRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', shopRoutes.getProducts);
router.put('/user/:id', shopRoutes.editUser);

module.exports = router