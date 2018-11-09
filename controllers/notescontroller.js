const router = require('express').Router()
const Notes = require('../db').import('../models/notes')
const validateSession = require('../middleware/validate-session')


router.post('/create', validateSession, (req, res) => {
    Notes.create({
        note: req.body.note,
        userId: req.user.id
    })
})

router.get('/', validateSession, (req, res) => {
    Notes.findAll({where: {userId: req.user.id}})
    .then(response => res.send(response))
})

router.get('/get/:id', validateSession, (req, res) => {
    Notes.findOne({where: {id: req.params.id, userId: req.user.id}})
    .then(response => res.send(response))
})

router.put('/update/:id', validateSession, (req, res) => {
    Notes.update({note: req.body.note}, {where: {id: req.params.id}})
    .then(
        updateSuccess = () => res.send('Note updated'),
        updateError = (err) => res.send(err)
    )
})

router.delete('/delete/:id', validateSession, (req, res) => {
    Notes.destroy({where: {id: req.params.id}})
})

module.exports = router