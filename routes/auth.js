const router = require('express').Router('');
const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    knex('users')
        .where({ email: email })
        .then((resp) => {
            const user = resp[0];
            if (!user) {
                res.status(403).json({ token: null, message: `No user found at ${email}` });
            } else if (user.password === password) {
                let token = jwt.sign({ name: user.first_name }, 'secret123');
                res.status(200).json({ token: token, message: `Successful login.` });
            } else {
                res.status(403).json({ token: null, message: `Incorrect password.` });
            }
        })
});

router.get('/profile', authorize, (req, res) => {
    res.json(req.payload);
});

function authorize(req, res, next) {
    const { authorization } = req.headers;
    // const token = authorization.split(' ')[1];
    jwt.verify(authorization, 'secret123', (err, decoded) => {
        if (err) {
            res.status(403).send('Token not valid');
        } else {
            req.payload = decoded;
        }
        next();
    })
}

module.exports = router;