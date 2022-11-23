const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'publication'})
})

//Display publication
route.get('/display', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM publication', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Insert publication
route.post('/insert', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO publication set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Insert publication success!')
        })
    })
})

//Update publication
route.put('/update/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE publication set ? WHERE idpublication = ?', [req.body, req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Update publication success!')
        })
    })
})

//Delete publication
route.delete('/delete/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('DELETE FROM publication WHERE idpublication = ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Delete publication success!')
        })
    })
})

//likes
route.put('/likesadd/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE publication set likes= likes+1 WHERE idpublication= ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Likes publication success!')
        })
    })
})

//likes
route.put('/likesdel/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE publication set likes= likes-1 WHERE idpublication= ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Likes publication success!')
        })
    })
})

module.exports = route