const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Define a POST route for login
router.post('/', loginController.handleLogin);

module.exports = router;
