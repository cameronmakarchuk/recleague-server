const express = require('express');
const fileupload = require("express-fileupload");
const cors = require('cors');
require('dotenv').config();
const leagueRoutes = require('./routes/leagues');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const leagueDetailsRoutes = require('./routes/league_details');
const port = process.env.PORT;

const app = express();
app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ENDPOINTS / ROUTES
app.use('/leagues', leagueRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/league-details', leagueDetailsRoutes)


app.listen(port, () => {
    console.log('Listening on port: ' + port);
})
