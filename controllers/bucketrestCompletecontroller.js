let router = require('express').Router();
let sequelize = require('../db');
let BucketRestComplete = sequelize.import('../models/bucketrestComplete');
let validateSession = require('../middleware/validate-session');

router.post('/completed', validateSession, (req, res) => {

    BucketRestComplete
        .create({
            name: req.body.name,
            name_suffix: req.body.name_suffix,
            url: req.body.url,
            userId: req.user.id
        }).then(
            createSuccess = (bucketrestcomplete) => res.status(200).json(bucketrestcomplete)
        )
        .catch(
            createError = (err) => res.status(500).send(err.message)
        )
})

router.get('/getall', validateSession, function (req, res) {
    let userid = req.user.id

    BucketRestComplete
        .findAll({
            where: {
                userId: userid
            }
        })
        .then(
            findAllSuccess = (data) => res.status(200).json(data),
            findAllError = (err) => res.status(500).send(err.message)
        );
});

router.delete('/delete/:id', validateSession, (req, res) => {
    BucketRestComplete.destroy({
        where: {
            id: req.params.id
        }
    })
})

module.exports = router