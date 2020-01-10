const express = require('express');
const shopRoutes = require('../controllers/shop');
const router = express.Router();

router.get('/products', shopRoutes.getProducts);
router.get('/users/:id', adminRoutes.getUserById);
router.post('/register', shopRoutes.addUser);
router.put('/user/:id', shopRoutes.editUser);

module.exports = router