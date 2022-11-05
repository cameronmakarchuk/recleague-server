const router = require('express').Router();
const knex = require('knex')(require('../knexfile'))




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

router.get('/leagues/:userId', (req, res) => {
    const { userId } = req.params;
    knex.select('users.id', 'users.first_name', 'leagues.id', 'leagues.name')
        .from('users')
        .join('league_details', { 'league_details.users_id': 'users.id' })
        .join('leagues', { 'leagues.id': 'league_details.leagues_id' })
        .then(resp => res.status(200).json(resp))
        .catch(err => res.status(400).json(err))

})

/* 
SELECT users.id, users.first_name, leagues.id, leagues.name
FROM leagues
JOIN league_details
ON (league_details.leagues_id = leagues.id)
JOIN users
ON (users.id = league_details.users_id);
*/





module.exports = router;