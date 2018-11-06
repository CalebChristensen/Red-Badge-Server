let router = require('express').Router();
let sequelize = require('../db');
let BucketTour = sequelize.import('../models/buckettour')
let validateSession = require('../middleware/validate-session');
// || POST SINGLE ITEM FOR INDIVIDUAL USER ||
router.post('/create', validateSession, function (req,res) {

  BucketTour
  .create({
    name: req.body.name,
    starts_on: req.body.starts_on,
    url: req.body.url,
    userId: req.user.id
  })
  .then(
    function createSuccess(buckettour) {
      res.json(buckettour);
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});


module.exports = router;