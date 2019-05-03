const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../helpers/model.js');

const server = express();
const configureRoutes = require('./auth/auth.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);
module.exports = server;

// *** Default end point *** 
server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is working' });
})

// *** Endpoints ***

server.post('/api/create', async (req, res) => {
    try {
        const Data = req.body
        console.log(Data)
        if(Data.entry) {
            const result = await db.insert(Data)
            console.log('result:', result)
            res.status(201).json({message: `${result} added to the database`})
        } else {
        res.status(422).json({ error: 'Missing data' })
        }
    } catch(err) {
        res.status(500).json({ error: 'Dtabase error' })
    }
})

server.get('/api/bh', async (req, res) => {
    const rows = await db.getAll();
  
    res.status(200).json(rows);
  });

server.put('/api/bh/:id', async (req, res) => {
    try {
        const Data = req.body
        const { id } = req.params
        //console.log(id)

        if(Data.entry) {
            const array = await db.update(id, Data)
            //console.log(Data)
            res.status(200).json({ message: `The id # ${id} has been edited`})
        } else {
            res.status(422).json({ error: 'Missing required fields' })
        }
    } catch(err) {
        res.status(500).json({ error: 'Database error' })
    }
})

server.delete('/api/bh/:id', async (req, res) => {
    try {
        const { id } = req.params

        if(id) {
            const result = await db.remove(id)
            res.status(200).json({ message: `Entry with id# ${id} successfuly deleted` })
        } else {
            res.status(404).json({ error: `Entry doesn't exist` })
        }
    } catch(err) {
        res.status(500).json({ message: `Database error` })
    }
})
