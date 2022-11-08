const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'job'})
})



module.exports = route