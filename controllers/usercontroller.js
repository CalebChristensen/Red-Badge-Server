let router = require('express').Router();
let User = require('../db').import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

// || Create User Endpoint: STARTER ||
router.post('/createuser', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    passwordhash: bcrypt.hashSync(req.body.password, 10)
  })
  .then(
  createSuccess = (user) => {
    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24})

    res.json({
        user: user,
        message: `Thanks for creating an account, ${user.username}!`,
        sessionToken: token
    })
  },
  createError = err => res.send(500, err)
  )
})

router.post('/signin',(req, res) => {
    User.findOne( {where: { username: req.body.username } } )
    .then(
        user => { 
            if (user) 
                { bcrypt.compare(req.body.password, user.passwordhash, (err, matches) => { 
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: 60*60*24 }); 
                        res.json({ 
                            user: user, 
                            message: `Welcome Back, ${user.username}!`, 
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