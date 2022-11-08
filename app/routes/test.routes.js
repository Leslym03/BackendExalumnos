const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'testing'})
})

route.get('/users', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM users', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = route