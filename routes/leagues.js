const router = require('express').Router();
const knex = require('knex')(require('../knexfile'))
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
// const fileUpload = require('express-fileupload');

// router.use(fileUpload());

// GET ALL LEAGUES
router.get('/', (_req, res) => {
    knex('leagues')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).send(`Error retrieving leagues: ${err}`));
})

// GET LEAGUE BY ID
router.get('/:leagueId', (req, res) => {
    const { leagueId } = req.params;
    knex('leagues')
        .where({ id: leagueId })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).send(`Error retrieving your league: ${err}`));
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