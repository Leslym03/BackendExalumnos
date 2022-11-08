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

//Insert profile
route.post('/insert', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('INSERT INTO profile set ?', [req.body], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Insert user success!')
        })
    })
})

//Delete profile
route.delete('/delete/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('DELETE FROM profile WHERE CUI = ?', [req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Delete user success!')
        })
    })
})

//Update profile
route.put('/update/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('UPDATE profile set ? WHERE CUI = ?', [req.body, req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.send('Update user success!')
        })
    })
})

module.exports = route