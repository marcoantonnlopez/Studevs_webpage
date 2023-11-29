// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser'); 
// const app = express();

// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); 

// app.use(express.static(path.join(__dirname, 'public'))); 

// // const mongo_uri = 'mongodb://localhost:27017';
// const mongo_uri = 'mongodb://dev:dev@localhost/todos';

// mongoose.connect(mongo_uri, function(err) { 
//     if(err) {
//         throw err;
//     } else {
//         console.log(`Successfully connected to ${mongo_uri}`);
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!'); // 
// });

// app.listen(3000, () => { 
//     console.log('Server started on port 3000');
// });

// module.exports = app;

require('dotenv').config();
const Server = require("./models/server");

const server = new Server();

server.listen();