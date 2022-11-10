const router = require('express').Router();
const knex = require('knex')(require('../knexfile'))


// GET ALL LEAGUES
router.get('/', (req, res) => {
    const queryParams = req.query;
    knex('leagues')
        .then((data) => {
            if (queryParams.location && queryParams.sport) {
                data = data.filter(league => {
                    return league.city.toLowerCase() === queryParams.location.toLowerCase() && league.sport.toLowerCase() === queryParams.sport.toLowerCase();
                })
                res.status(200).json(data);
            } else if (queryParams.location) {
                data = data.filter(league => league.city.toLowerCase() === queryParams.location.toLowerCase());
                res.status(200).json(data);
            } else if (queryParams.sport) {
                data = data.filter(league => league.sport.toLowerCase() === queryParams.sport.toLowerCase());
                res.status(200).json(data);
            } else {
                res.status(200).json(data);

            }
        })
        .catch(err => res.status(400).send(`Error retrieving leagues: ${err}`));
})

// GET LEAGUE BY ID
router.get('/:leagueId', (req, res) => {
    const { leagueId } = req.params;
    knex('leagues')
        .where({ id_league: leagueId })
        .then((data) => {
            res.status(200).json(data[0]);
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

// GET LEAGUES BY LEAGUE_OWNER/USERID
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    knex('leagues').where({ league_owner: userId })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).send(`Error retrieving your league data: ${err}`));
})

// POST / CREATE NEW LEAGUE
router.post('/', (req, res) => {
    knex('leagues')
        .insert({
            league_owner: req.body.league_owner,
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
            res.status(201).send(`/leagues/${resp[0]}`);
        })
        .catch(err => res.status(400).send(`Error creating your league: ${err}`));
})

//PATCH / EDIT LEAGUE DETAILS BY ID
router.patch('/:leagueId', (req, res) => {
    knex('leagues')
        .update(req.body)
        .where({ id_league: req.params.leagueId })
        .then((resp) => res.status(200).json(resp))
        .catch(err => res.status(400).send(`Error updating league: ${req.params.leagueId} ${err}`));
})

module.exports = router;