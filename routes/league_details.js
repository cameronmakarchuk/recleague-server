const router = require('express').Router();
const knex = require('knex')(require('../knexfile'))


// JOIN LEAGUE WITH USER / ADD USER TO LEAGUE
router.post('/', (req, res) => {
    knex('league_details')
        .insert({
            users_id: req.body.users_id,
            leagues_id: req.body.leagues_id
        })
        .then(resp => {
            res.status(201).json({ id: resp });
        })
        .catch(err => res.status(400).send(`Error creating your record: ${err}`));
})

// GET LEAGUES JOINED BY USERID
router.get('/leagues/:userId', (req, res) => {
    const { userId } = req.params;
    knex.select('users.id_user', 'users.first_name', 'leagues.id_league', 'leagues.name')
        .from('users').where({ id_user: userId })
        .join('league_details', { 'league_details.users_id': 'users.id_user' })
        .join('leagues', { 'leagues.id_league': 'league_details.leagues_id' })
        .then(resp => res.status(200).json(resp))
        .catch(err => res.status(400).json(err))

})

// GET USERS THAT HAVE JOINED A LEAGUE BY LEAGUEID
router.get('/users/:leagueId', (req, res) => {
    const { leagueId } = req.params;
    knex.select('leagues.id_league', 'leagues.name', 'users.id_user', 'users.first_name', 'users.last_name', 'users.email')
        .from('leagues').where({ id_league: leagueId })
        .join('league_details', { 'league_details.leagues_id': 'leagues.id_league' })
        .join('users', { 'users.id_user': 'league_details.users_id' })
        .then(resp => res.status(200).json(resp))
        .catch(err => res.status(400).json(err))

})


module.exports = router;