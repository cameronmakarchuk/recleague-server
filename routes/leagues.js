const router = require('express').Router();
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
const fileUpload = require('express-fileupload');

router.use(fileUpload());

// GET ALL LEAGUES
router.get('/', (req, res) => {
    //get all leagues
})

// GET LEAGUE BY ID
router.get('/:id', (req, res) => {
    //get leagues by id
})

// GET LEAGUES BY LOCATION (or use get all leagues and filter?)
router.get('//:location', (req, res) => {
    //get leagues by location
})

// POST / CREATE NEW LEAGUE
router.post('/', (req, res) => {
    //create a new league
})

//PATCH / EDIT LEAGUE DETAILS BY ID
router.patch('/:id', (req, res) => {
    //edit league details by id
})

module.exports = router;