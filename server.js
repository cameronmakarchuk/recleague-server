const express = require('express');
const fileupload = require("express-fileupload");
const cors = require('cors');
const fs = require('node:fs');
require('dotenv').config();
const leagueRoutes = require('./routes/leagues');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const port = process.env.PORT ?? 8080;

const app = express();
app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ENDPOINTS / ROUTES
app.use('/leagues', leagueRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log('Listening on port: ' + port);
})
