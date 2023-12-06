const express = require('express');
const { usersGet, usersDelete, usersPut, usersPatch, registerUser } = require('../controllers/users');
const { loginUser } = require('../controllers/authController');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Otras rutas relacionadas con usuarios
router.get('/', usersGet); // Obtener todos los usuarios
router.delete('/:id', usersDelete); // Eliminar usuario por ID
router.put('/:id', usersPut); // Actualizar usuario por ID
router.patch('/:id', usersPatch); // Actualizar parcialmente usuario por ID
// router.post('/login', loginUser);

module.exports = router;
