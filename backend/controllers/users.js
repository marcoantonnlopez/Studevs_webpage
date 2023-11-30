const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
    try {
        const { username, password, email, userType } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            password, // La contraseña será hasheada en el middleware de Mongoose
            email,
            userType
        });

        // Guardar el usuario en la base de datos
        await newUser.save();

        // Respuesta exitosa
        res.status(201).json({ message: 'Usuario registrado con éxito', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
};


const usersGet = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
};

const usersPost = async (req, res) => {
    const { username, password, email, userType } = req.body;
    try {
        const newUser = new User({ username, password, email, userType });
        await newUser.save();
        res.status(201).json({ message: 'Usuario creado con éxito', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
};

const usersDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error });
    }
};

const usersPut = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        res.json({ message: 'Usuario actualizado con éxito', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};

const usersPatch = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        res.json({ message: 'Usuario actualizado parcialmente con éxito', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};

module.exports = { usersGet, usersPost, usersDelete, usersPut, usersPatch, registerUser };