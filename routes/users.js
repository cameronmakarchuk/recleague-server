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
    //create new user
})

//PATCH / EDIT USER BY ID
router.patch('/:id', (req, res) => {
    //edit user by id
})

module.exports = router;