const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'testing'})
})

//Display profile
route.get('/display', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM profile', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = route