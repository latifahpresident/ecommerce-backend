const express = require('express');
const adminRoutes = require('../controllers/admin');
const router = express.Router();

router.get('/users', adminRoutes.getUsers);
router.get('/users/:id', adminRoutes.getUserById);
router.post('/register', adminRoutes.addUser);
router.put('/user/:id', adminRoutes.editUser);

module.exports = router 