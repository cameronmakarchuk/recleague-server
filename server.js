const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const port = process.env.PORT ?? 8080;
app.use(cors());
app.use(express.json());

// ENDPOINTS

// GET ALL LEAGUES
app.get('/leagues', (req, res) => {
    //get all leagues
})

// GET LEAGUE BY ID
app.get('/leagues/:id', (req, res) => {
    //get leagues by id
})

// GET LEAGUES BY LOCATION (or use get all leagues and filter?)
app.get('/leagues/:location', (req, res) => {
    //get leagues by location
})

// POST / CREATE NEW LEAGUE
app.post('/leagues', (req, res) => {
    //create a new league
})

// GET  USER BY ID
app.get('/users/:id', (req, res) => {
    //get user by id
})

// POST / CREATE NEW USER
app.post('/users', (req, res) => {
    //create new user
})

//PATCH / EDIT USER BY ID
app.patch('/users/:id', (req, res) => {
    //edit user by id
})


app.listen(port, () => {
    console.log('Listening on port: ' + port);
})
