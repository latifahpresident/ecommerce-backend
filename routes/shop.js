const express = require('express');
const shopRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', shopRoutes.getProducts);
router.get('/product/:id', shopRoutes.getProductById);
router.get('/users/:id', shopRoutes.getUserById);
router.post('/register', shopRoutes.addUser);
router.put('/user/:id', shopRoutes.editUser);

module.exports = router