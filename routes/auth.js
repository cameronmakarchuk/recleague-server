const router = require('express').Router('');
const knex = require('knex')(require('../knexfile'))


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    knex('users')
        .where({ email: email })
        .then((resp) => {
            const user = resp[0];
            if (!user) {
                res.status(403).send({ token: null, message: `No user found at ${email}` });
            } else if (user.password === password) {
                // let token = jwt.sign({ email: email }, 'secret123');
                res.status(200).json('It WORKED!');
            } else {
                res.status(403).send('Incorrect email or password.');
            }
        })
})

router.get('/profile', (req, res) => {

})

module.exports = router;