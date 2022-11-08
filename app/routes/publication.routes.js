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




module.exports = route