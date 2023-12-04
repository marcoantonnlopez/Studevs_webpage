const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; // Define un puerto por defecto

        this.usersPath = "/api/users";
        this.authPath = '/api/auth';
        // this.authPath = "/api/auth/login";

        this.middlewares();
        this.routes();
        this.db();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    db() {
        const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studedvsWebDB";
        mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("Conexión exitosa a MongoDB"))
            .catch(error => console.error("Error al conectar con la base de datos", error));
    }
    

    routes() {
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.authPath, require("../routes/authRoutes"));

        // Manejador de rutas no encontradas
        this.app.get("*", (req, res) => {
            // res.redirect('/home');
            res.status(404).send("Error - Ruta no encontrada");
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        }); 
    }
}

module.exports = Server;

// *New LogIn

// const express = require('express');
// const mongoose = require('mongoose');
// const authRouter = require('../routes/authRoutes');
// const cors = require('cors');

// class Server {
//   constructor() {
//     this.app = express();
//     this.port = process.env.PORT || 3000;
//     this.databaseConnect();

//     // Middleware
//     this.middlewares();

//     // Rutas
//     this.routes();
//   }

//   databaseConnect() {
//     const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studedvsWebDB";
//     mongoose.connect(dbUri)
//       .then(() => console.log("Conexión exitosa a MongoDB"))
//       .catch(error => console.error("Error al conectar con la base de datos", error));
//   }

//   middlewares() {
//     // Activa el middleware CORS para todos los orígenes
//     this.app.use(cors());

//     // Otros middlewares
//     this.app.use(express.json());
//     // ...
//   }

//   routes() {
//     this.app.use('/api/auth', authRouter);
//     this.app.use('/', authRouter);
//     // Otras rutas si es necesario
//   }

//   listen() {
//     this.app.listen(this.port, () => {
//       console.log(`Servidor corriendo en el puerto ${this.port}`);
//     });
//   }
// }

// module.exports = Server;
