const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'job'})
})

//Display job
route.get('/display', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM job_offer', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Insert job
route.post('/insert', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO job_offer set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Insert job success!')
        })
    })
})

module.exports = route