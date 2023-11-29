const Router = require('express').Router;
const { usersGet, usersPost, usersDelete, usersPut, usersPatch } = require('../controllers/users');

const router = Router();

// Rutas para manejar las solicitudes de usuarios
router.get('/', usersGet);
router.post('/', usersPost);
router.delete('/', usersDelete);
router.put('/', usersPut);
router.patch('/', usersPatch);

module.exports = router;
