let router = require('express').Router();
let TestData = require('../db').import('../models/test');

router.get('/getall', function(req, res){
    
  TestData
  .findAll({
    attributes: ['testdata']
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

router.get('/get/:id', function(req,res) {
  let data = req.params.id;

  TestData
  .findOne({
    where: { id: data },
    attributes: ['testdata']
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

router.post('/create', function (req, res) {

  TestData
  .create({
    testdata: req.body.testdata.item
  }).then(dataFromDatabase => {
      res.send("Test two was success.. For now..")
  })
});

router.delete('/delete/:id', function(req, res) {
  let data = req.params.id;

  TestData
  .destroy({
    where: { id: data }
  }).then(
    function deleteLogSuccess(data){
      res.send("you removed a log");
    },
    function deleteLogError(err){
      res.send(500, err.message);
    }
  );
});


router.put('/update/:id', (req, res, next) => {
  TestData
  .update(
      {
          testdata: req.body.testdata.item
      },
      {
          where: { id: req.params.id }
      }
  )
  .then(
    function updateSuccess(updatedLog) {
      res.json({
        testdata: req.body.testdata.item
      });
    },
    function updateError(err){
      res.send(500,err.message);
    }
  )
});

module.exports = router;