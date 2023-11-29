// Obtener usuarios
const usersGet = (req, res) => {
    res.json({ msg: 'get API - controlador' });
};

// Crear usuario
const usersPost = (req, res) => {
    const body = req.body;
    res.json({ msg: 'post API - controlador', body });
};

// Eliminar usuario
const usersDelete = (req, res) => {
    res.json({ msg: 'delete API - controlador' });
};

// Actualizar usuario
const usersPut = (req, res) => {
    res.json({ msg: 'put API - controlador' });
};

// Actualizar parte del usuario
const usersPatch = (req, res) => {
    res.json({ msg: 'patch API - controlador' });
};

module.exports = { usersGet, usersPost, usersDelete, usersPut, usersPatch };
