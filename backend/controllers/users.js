const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Función para registrar un nuevo usuario 
const registerUser = async (req, res) => {
    try {
        const { username, password, email, userType } = req.body;

        // Verificar si el email o username ya están en uso
        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'El correo electrónico o nombre de usuario ya están en uso' });
        }

        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 12);

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            password: hashedPassword,
            // password,
            email,
            userType
        });

        // Guardar el usuario en la base de datos
        await newUser.save();

        // Generar token JWT
        const token = jwt.sign({ userId: newUser._id }, 'TU_SECRET_KEY', { expiresIn: '1h' });

        // Respuesta exitosa con token
        res.status(201).json({ message: 'Usuario registrado con éxito', token, newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, password, email, userType, name, lastname, profilePhoto, phrase, description } = req.body;

        // Verificar si el email o username ya están en uso
        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'El correo electrónico o nombre de usuario ya están en uso' });
        }

        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 12);

        // Crear un nuevo usuario
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            userType,
            name,
            lastname,
            profilePhoto,
            phrase,
            description
        });

        // Guardar el usuario en la base de datos
        await newUser.save();

        // Respuesta exitosa con la información del nuevo usuario
        res.status(201).json({ message: 'Usuario creado con éxito', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
};


const usersGet = async (req, res) => {
    try {
        const users = await User.find({}).select('-password'); // Excluir la contraseña al enviar la respuesta
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
};


const usersDelete = async(req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (err) {
        console.error('Error al eliminar usuario:', err);
        res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};

const usersPut = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
  

const usersPatch = async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, update, { new: true }).select('-password');
        res.json({ message: 'Usuario actualizado parcialmente con éxito', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
    }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = { usersGet, registerUser, usersDelete, usersPut, usersPatch, getUserById, createUser };
