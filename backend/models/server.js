// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Conectar a MongoDB
// mongoose.connect('tu-uri-de-mongodb', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Conectado a MongoDB'))
//   .catch(err => console.error('No se pudo conectar a MongoDB', err));

// // Rutas (aquí irán tus rutas de autenticación)

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}...`));

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server {

    constructor()  {
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = "/api/users";

        this.middlewares();
        this.routes();
        this.db();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    db(){
        // mongoose.connect("mongodb://localhost:27017").then(
        mongoose.connect("mongodb://127.0.0.1:27017/studedvsWebDB").then(
        // mongoose.connect("mongodb://192.168.100.1:27017/studedvsWebDB").then(
            () => {
                console.log("conexión exitosa");
            }
        ).catch(
            (error) => {
                console.log("Error al conectar con la base de datos");
                console.log(error);
            }
        )
    }

    routes(){
        this.app.use(this.usersPath, require("../routes/users"));
        
        this.app.get("*", (req, res) => {
            res.status(404).send("Error - ruta no encontrada");
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        }); 
    }


}

module.exports = Server;