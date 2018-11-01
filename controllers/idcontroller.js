let router = require('express').Router();
let Id = require('../db').import('../models/id');

//Get All Info in DB
router.get('/getall', function(req, res){
  Id
  .findAll({
    attributes: ['cityIds','cityName', 'countryIds', 'countryName']
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
//Get All Countries & IDs
router.get('/getallcountries', function(req, res){
  Id
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

//Get All Country Names
router.get('/getallcountrynames', function(req, res){
  Id
  .findAll({
    attributes: ['countryName']
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

//Get All Cities & IDs
router.get('/getallcities/:countryIds', function(req, res){
  Id
  .findAll({where: {countryIds: req.params.countryIds},
    attributes: ['cityIds', 'cityName']
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