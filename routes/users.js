const router = require('express').Router();
const knex = require('knex')(require('../knexfile'));
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
// const fileUpload = require('express-fileupload');

// router.use(fileUpload());

// GET  USER BY ID
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    knex('users')
        .where({ id: userId })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).send(`Error retrieving your league: ${err}`));
})

// POST / CREATE NEW USER
router.post('/', (req, res) => {
    knex('users')
        .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            country: req.body.country,
            postal_code: req.body.postal_code,
            avatar_img: '',
            password: req.body.password,
            is_league_owner: req.body.is_league_owner
        })
        .then(resp => {
            res.sendStatus(201)
        })
        .catch(err => res.status(400).send(`Error creating your user profile: ${err}`));
});

//PATCH / EDIT USER BY ID
router.patch('/:id', (req, res) => {
    //edit user by id
})

module.exports = router;