let router = require('express').Router();
let sequelize = require('../db');
let BucketPoiComplete = sequelize.import('../models/bucketpoiComplete');
let validateSession = require('../middleware/validate-session');

router.post('/completed', validateSession, (req, res) => {

    BucketPoiComplete
        .create({
            name: req.body.name,
            name_suffix: req.body.name_suffix,
            url: req.body.url,
            userId: req.user.id
        }).then(
            createSuccess = (bucketpoicomplete) => res.status(200).json(bucketpoicomplete)
        )
        .catch(
            createError = (err) => res.status(500).send(err.message)
        )
})

router.get('/getall', validateSession, function (req, res) {
    let userid = req.user.id

    BucketPoiComplete
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
    BucketPoiComplete.destroy({
        where: {
            id: req.params.id
        }
    })
})

module.exports = router