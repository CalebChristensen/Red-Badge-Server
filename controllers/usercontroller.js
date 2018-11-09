let router = require('express').Router();
let User = require('../db').import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let validateSession = require('../middleware/validate-session')

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
  createError = err => res.status(500).send(err)
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
                    res.status(502).json({ message: "Incorrect password"});
                 }
            });
        }else{
            res.status(500).json({ message: "Username does not exist, please create an account"});
            }
        },
        function(err) {
            res.status(501).json({ message: "FISSION MAILED" });
        }
    );
});

router.put('/update/:id', validateSession, (req, res) => {
    User.update({
        username: req.body.username,
        email: req.body.email
      }, {where: {id: req.params.id}})
    .then(
        updateSuccess = () => res.send('Account updated'),
        updateError = (err) => res.send(err)
    )
})

router.delete('/delete', validateSession, (req,res) => {
    User.destroy({where: {id: req.user.id}})
    .then(
        deleteSuccess = () => res.send('Account deleted'),
        deleteError = (err) => res.send(err)
    )
})

router.delete('/adminDelete/:id', validateSession, (req, res) => {
    User.destroy({where: {id: req.params.id}})
    .then(
        deleteSuccess = () => res.send('Account deleted'),
        deleteError = (err) => res.send(err)
    )
})

router.get('/', validateSession, (req, res) => {
    User.findOne({where: {id: req.params.id}})
    .then(response => res.send(response))
})

router.get('/update/:id', validateSession, (req, res) => {
    User.findOne({where: {id: req.params.id}})
    .then(response => res.send(response))
})

router.get('/allUsers', validateSession, (req, res) => {
    User.findAll()
    .then(response => res.send(response))
})

module.exports = router