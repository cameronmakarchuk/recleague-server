const express = require('express');
const cors = require('cors');
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const port = process.env.PORT ?? 8080;
app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log('Listening on port: ' + port);
})
