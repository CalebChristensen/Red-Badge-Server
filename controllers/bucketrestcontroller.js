let router = require('express').Router();
let sequelize = require('../db');
let BucketRest = sequelize.import('../models/bucketrest')
let validateSession = require('../middleware/validate-session');
// || POST SINGLE ITEM FOR INDIVIDUAL USER ||
router.post('/create', validateSession, function (req,res) {

  BucketRest
  .create({
    name: req.body.name,
    name_suffix: req.body.name_suffix,
    url: req.body.url,
    userId: req.user.id
  })
  .then(
    function createSuccess(bucketrest) {
      res.json(bucketrest);
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

router.get('/getall', function(req, res){
  let userid = req.user.id;

  BucketRest
  .findAll({
    where: { owner: userid },
    attributes: ['name', 'name_suffix', 'url']
  })
  .then(
    function findAllSuccess(data) {
      console.log("Controller data:", data);
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});


module.exports = router;