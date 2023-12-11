const express = require('express');
const { usersGet, usersDelete, usersPut, usersPatch, registerUser, getUserById, createUser } = require('../controllers/users');
const { loginUser } = require('../controllers/authController');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);
router.post('/create', createUser);
// Ruta para obtener todos los usuarios
router.get('/', usersGet);

// Ruta para obtener los detalles de un usuario por ID
router.get('/:id', getUserById);

// Otras rutas relacionadas con usuarios
router.delete('/:id', usersDelete); // Eliminar usuario por ID
router.put('/:id', usersPut); // Actualizar usuario por ID
router.patch('/:id', usersPatch); // Actualizar parcialmente usuario por ID
// router.post('/login', loginUser);

module.exports = router;
