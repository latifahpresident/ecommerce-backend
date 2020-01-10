const express = require('express');
const adminRoutes = require('../controllers/admin');
const router = express.Router();

router.get('/users', adminRoutes.getUsers);
router.get('/users/:id', adminRoutes.getUserById);
module.exports = router