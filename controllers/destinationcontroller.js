let router = require('express').Router();
let Destination = require('../db').import('../models/destination');
let validateSession = require('../middleware/validate-session');


router.get('/getdestinations', validateSession, (req, res) => {
    Destination.findOne({ 
        where: {userId : req.user.id},
        include: [{all: true}]
    })
    .then(dest => res.json(dest))
})

module.exports = router;