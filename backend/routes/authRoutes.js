// // routes/authRoutes.js
// const express = require('express');
// const { loginUser, registerUser  } = require('../controllers/authController');

// const router = express.Router();

// // Ruta para iniciar sesión
// router.post('/login', loginUser);


// module.exports = router;

// *New LogIn
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);

module.exports = router;
