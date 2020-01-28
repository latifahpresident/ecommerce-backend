const express = require('express');
const adminRoutes = require('../controllers/admin');
const router = express.Router();

router.get('/users', adminRoutes.getUsers);
router.get('/user/:firebase_id', adminRoutes.getUserById);
router.put('/user/:id', adminRoutes.editUser);
router.delete('/user/:id', adminRoutes.deleteUser);

module.exports = router 