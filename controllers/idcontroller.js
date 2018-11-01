let router = require('express').Router();
let Id = require('../db').import('../models/id');

//Get All Info in DB
router.get('/getall', function(req, res){
  Id
  .findAll({
    attributes: ['cityIds','name', 'countryIds']
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
//Get All
router.get('/getall', function(req, res){
  Id
  .findAll({
    attributes: ['cityIds','name', 'countryIds']
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