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




module.exports = router;