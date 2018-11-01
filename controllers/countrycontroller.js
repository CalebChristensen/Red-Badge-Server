let router = require('express').Router();
let Country = require('../db').import('../models/country');

//Get ID and Country
router.get('/getall', function(req, res){
  Country
  .findAll({
    attributes: ['countryIds', 'countryName']
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

//Get ID and Country
router.get('/getallcountry', function(req, res){
  Country
  .findAll()
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