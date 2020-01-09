const express = require('express');
const adminRoutes = require('../controllers/admin');
const router = express.Router();

router.get('/users', adminRoutes.getUsers);

module.exports = router