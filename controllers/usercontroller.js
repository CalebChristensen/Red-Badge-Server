let router = require('express').Router();
let User = require('../db').import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

// || Create User Endpoint: STARTER ||
router.post('/createuser', (req, res) => {
  User.create({
    username: req.body.user.username,
    email: req.body.user.email,
    passwordhash: bcrypt.hashSync(req.body.user.password, 10)
  })
  .then(
  createSuccess = (user) => {
    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24})

    res.json({
        user: user,
        message: 'user created',
        sessionToken: token
    })
  },
  createError = err => res.send(500, err)
  )
})

router.post('/signin',(req, res) => {
    User.findOne( {where: { username: req.body.user.username } } )
    .then(
        user => { 
            if (user) 
                { bcrypt.compare(req.body.user.password, user.passwordhash, (err, matches) => { 
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: 60*60*24 }); 
                        res.json({ 
                            user: user, 
                            message: "user logged in", 
                            sessionToken: token
                        });
                }else{ 
                    res.status(502).send({ error: "FISSION MAILED"});
                 }
            });
        }else{
            res.status(500).send({ error: "Time Paradox"});
            }
        },
        function(err) {
            res.status(501).send({ error: "FISSION MAILED" });
        }
    );
});

module.exports = router