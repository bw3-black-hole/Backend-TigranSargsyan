const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const configureRoutes = require('./auth/auth.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);
module.exports = server;

// *** Endpoints ***

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is working' });
})
