let router = require('express').Router();
let sequelize = require('../db');
let BucketTourComplete = sequelize.import('../models/buckettourComplete');
let validateSession = require('../middleware/validate-session');

router.post('/completed', validateSession, (req,res) => {

    BucketTourComplete
    .create({
        name: req.body.name,
        starts_on: req.body.starts_on,
        url: req.body.url,
        userId: req.user.id
    }).then(
        createSuccess = (buckettourcomplete) => res.status(200).json(buckettourcomplete)
    )
    .catch(
        createError = (err) => res.status(500).send(err.message)
    )
})

router.get('/getall', validateSession, function(req, res){
    let userid = req.user.id
  
    BucketTourComplete
    .findAll({
      where: { userId: userid }
    })
    .then(
        findAllSuccess = (data) => res.status(200).json(data),
        findAllError = (err) => res.status(500).send(err.message)
    );
  });

module.exports = router