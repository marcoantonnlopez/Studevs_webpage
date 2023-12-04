const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mongo_uri = 'mongodb://127.0.0.1:27017/studevsWebDB';

mongoose.connect(mongo_uri)
    .then(() => console.log(`Successfully connected to ${mongo_uri}`))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    const user = new User({ username, password });

    try {
        await user.save();
        res.status(200).send("Welcome to the club!");
    } catch (err) {
        res.status(500).send("Error registering new user please try again.");
    }
});

app.post('/authenticate', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).exec();
        if (!user) {
            return res.status(401).json({
                error: 'Username o password incorrecto/ el usuario no existe'
            });
        }

        const isMatch = await user.isCorrectPassword(password);
        if (isMatch) {
            res.status(200).json({
                message: 'Usuario autenticado correctamente'
            });
        } else {
            res.status(401).json({
                error: 'Username o password incorrecto'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Error al autenticar al usuario'
        });
    }
});

// ------------------  GET ------------------
app.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Excluye la contraseña por seguridad
        res.json(users);
    } catch (err) {
        res.status(500).send('Error retrieving users');
    }
});

// ---------


app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
