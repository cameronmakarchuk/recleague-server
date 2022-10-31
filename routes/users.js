const router = require('express').Router();
const fs = require('node:fs');
const { v4: uuidv4 } = require('uuid');
const fileUpload = require('express-fileupload');

router.use(fileUpload());

// GET  USER BY ID
router.get('/:id', (req, res) => {
    //get user by id
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