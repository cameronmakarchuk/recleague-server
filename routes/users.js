const router = require('express').Router();
const knex = require('knex')(require('../knexfile'));
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');


// GET  USER BY ID
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    knex('users')
        .where({ id_user: userId })
        .then(data => {
            res.status(200).json(data[0]);
        })
        .catch(err => res.status(400).send(`Error retrieving your league: ${err}`));
})

// POST / CREATE NEW USER
router.post('/', (req, res) => {
    const newpath = process.cwd() + "/public/";
    const file = req.files.avatar_img;
    const filename = new Date().valueOf() + file.name;

    file.mv(`${newpath}${filename}`, (err) => {
        if (err) {
            res.status(500).send({ message: "File upload failed", code: 200 });
        } else {
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
                    avatar_img: filename,
                    password: req.body.password,
                    is_league_owner: req.body.is_league_owner === 'true'
                })
                .then(resp => {
                    res.status(201).send(`User was created at: /users/${resp[0]}`);
                })
                .catch(err => res.status(400).send(`Error creating your user profile: ${err}`));
        }
    });





});

//PATCH / EDIT USER BY ID
router.patch('/:userId', (req, res) => {
    knex('users')
        .update(req.body)
        .where({ id_user: req.params.userId })
        .then((resp) => res.status(200).json(resp))
        .catch(err => res.status(400).send(`Error updating user: ${req.params.userId} ${err}`));
})

module.exports = router;