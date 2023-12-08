const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; // Define un puerto por defecto

        this.authPath = '/api/auth';
        this.usersPath = "/api/users";
        this.projectsPath = '/api/projects';
        this.eventsPath = '/api/events';

        this.middlewares();
        this.routes();
        this.db();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    db() {
        const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studevsWebDB";
        mongoose.connect(dbUri)
            .then(() => console.log("Conexión exitosa a MongoDB"))
            .catch(error => console.error("Error al conectar con la base de datos", error));
    }

    routes() {
        this.app.use(this.authPath, require("../routes/authRoutes"));
    this.app.use(this.usersPath, require("../routes/users"));
    this.app.use(this.projectsPath, require("../routes/projects"));
    this.app.use(this.eventsPath, require("../routes/events"));

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
