const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'testing'})
})


//Display user
route.get('/display', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM users', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Insert user
route.post('/insert', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO users set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Insert user success!')
        })
    })
})

//Delete user
route.delete('/delete/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('DELETE FROM users WHERE CUI = ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Delete user success!')
        })
    })
})

//Update user
route.put('/update/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE users set ? WHERE CUI = ?', [req.body, req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Update user success!')
        })
    })
})


module.exports = route