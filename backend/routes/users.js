const Router = require('express').Router;
const { usersGet, usersPost, usersDelete, usersPut, usersPatch, registerUser } = require('../controllers/users');

const router = Router();

router.post('/register', registerUser);
router.get('/', usersGet);
router.post('/', usersPost);
router.delete('/', usersDelete);
router.put('/', usersPut);
router.patch('/', usersPatch);

module.exports = router;
