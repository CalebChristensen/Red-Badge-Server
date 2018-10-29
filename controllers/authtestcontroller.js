let router = require('express').Router();
let sequelize = require('../db');
let AuthTest = sequelize.import('../models/authtest')

// || GET ALL ITEMS FOR INDIVIDUAL USER ||
router.get('/getall', function (req,res) {
  AuthTest
  .findAll({
  })
  .then(
    function findAllSuccess(data) {
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

// || POST SINGLE ITEM FOR INDIVIDUAL USER ||
router.post('/create', function (req,res) {
  let username = req.user.username;
  let authComment = req.body.authcomment.item;

  AuthTest
  .create({
    authcomment: authComment,
    username: username
  })
  .then(
    function createSuccess(authcomment) {
      res.json({
        authcomment: authcomment
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

// || DELETE ITEM FOR INDIVIDUAL USER ||
router.delete('/delete/:id', function(req, res) {
  let data = req.params.id;
  let userid = req.user.username;

  AuthTest
  .destroy({
    where: { id: data, username: userid }
  }).then(
    function deleteLogSuccess(data){
      res.send("you removed a log");
    },
    function deleteLogError(err){
      res.send(500, err.message);
    }
  );
});

// || UPDATE ITEM FOR INDIVIDUAL USER ||
router.put('/update/:id', function(req, res) {
  let data = req.params.id;
  let authcomment = req.body.authcomment.item;
  let userid = req.user.username;

  AuthTest
  .update({
    authcomment: authcomment
  },
  {where: {id: data, username: userid}}
  ).then(
    function updateSuccess(updatedLog) {
      res.json({
        authcomment: authcomment
      });
    },
    function updateError(err){
      res.send(500,err.message);
    }
  )
});

module.exports = router;