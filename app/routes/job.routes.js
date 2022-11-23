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

//Delete job
route.delete('/delete/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('DELETE FROM job_offer WHERE idjob_offer = ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Delete job success!')
        })
    })
})

//Update job
route.put('/update/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE job_offer set ? WHERE idjob_offer = ?', [req.body, req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Update job success!')
        })
    })
})


module.exports = route