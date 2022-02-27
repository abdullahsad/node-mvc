const express = require('express');
const {registerUSer, loginUser} = require('../controllers/AuthController');
const router = express.Router();
router.post('/register', registerUSer);
router.post('/login', loginUser);
module.exports = router;