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

const usersGet = async (req, res) => {
    try {
        const users = await User.find({}).select('-password'); // Excluir la contraseña al enviar la respuesta
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error });
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
    const { username, email, userType } = req.body; // Asegúrate de excluir la contraseña y otros campos sensibles
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { username, email, userType }, { new: true }).select('-password');
        res.json({ message: 'Usuario actualizado con éxito', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error });
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

module.exports = { usersGet, registerUser, usersDelete, usersPut, usersPatch };

// *New LogIn

// const User = require('../models/user'); // Asegúrate de que la ruta al modelo de usuario sea correcta
// const bcrypt = require('bcryptjs');

// // Registro de un nuevo usuario
// exports.registerNewUser = async (req, res) => {
//   try {
//     let { email, password } = req.body;

//     // Verificar si el usuario ya existe
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'El usuario ya existe' });
//     }

//     // Hashear la contraseña antes de guardar el usuario
//     const salt = await bcrypt.genSalt(10);
//     password = await bcrypt.hash(password, salt);

//     // Crear y guardar el nuevo usuario
//     user = new User({ email, password });
//     await user.save();

//     res.status(201).json({ message: 'Usuario creado exitosamente', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
//   }
// };

// // Autenticación de usuario
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Buscar el usuario por su correo electrónico
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Credenciales inválidas' });
//     }

//     // Comparar la contraseña enviada con la almacenada en la base de datos
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Credenciales inválidas' });
//     }

//     // Usuario autenticado con éxito
//     res.json({ message: 'Inicio de sesión exitoso', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error del servidor', error: error.message });
//   }
// };
