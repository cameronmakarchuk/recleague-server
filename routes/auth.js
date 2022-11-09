const router = require('express').Router('');
const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');

require('dotenv').config();

const SECRET_KEY = process.env.SESSION_SECRET;


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    knex('users')
        .where({ email: email })
        .then((resp) => {
            const user = resp[0];
            if (!user) {
                res.status(403).json({ token: null, message: `No user found at ${email}` });
            } else if (user.password === password) {
                let token = jwt.sign({ email: user.email }, SECRET_KEY);
                res.status(200).json({
                    token: token,
                    message: `Successful login.`,
                    user
                });
            } else {
                res.status(403).json({ token: null, message: `Incorrect password.` });
            }
        })
});

router.get('/profile', authorize, (req, res) => {
    knex('users').where({ email: req.payload.email })
        .then(resp => {
            res.status(200).json(resp[0]);
        })
        .catch(err => res.status(403).send(`Forbidden: ${err}`))
});

router.get('/logout', (req, res) => {
    // ADD THIS IN LATER...
})

function authorize(req, res, next) {
    const { authorization } = req.headers;
    jwt.verify(authorization, SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(403).send(`Token not valid: ${err}`);
        } else {
            req.payload = decoded;
        }
        next();
    })
}

module.exports = router;