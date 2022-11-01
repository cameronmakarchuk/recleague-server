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
router.get('/city/:city', (req, res) => {
    const { city } = req.params;
    knex('leagues')
        .where({ city: city })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).send(`Error retrieving your league: ${err}`));
})

// POST / CREATE NEW LEAGUE
router.post('/', (req, res) => {
    knex('leagues')
        .insert({
            league_owner: 1,
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country,
            postal_code: req.body.postal_code,
            sport: req.body.sport,
            gender: req.body.gender,
            price: req.body.price,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            description: req.body.description
        })
        .then(resp => {
            res.status(201).send(resp[0]);
        })
        .catch(err => res.status(400).send(`Error creating your league: ${err}`));
})

//PATCH / EDIT LEAGUE DETAILS BY ID
router.patch('/:id', (req, res) => {
    //edit league details by id
})

module.exports = router;