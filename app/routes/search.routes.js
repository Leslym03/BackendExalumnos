const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'search'})
})

//Display location
route.get('/qlocation/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT users.CUI, users.mail, users.graduation_year, users.type_user FROM users INNER JOIN profile ON users.CUI = profile.CUI WHERE profile.location LIKE ?',[req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


//Display type user
route.get('/qtypeuser/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT CUI, mail, graduation_year FROM users WHERE type_user =  ?',[req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Display specialty
route.get('/qspecialty/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT users.CUI, users.mail, users.graduation_year, users.type_user FROM users INNER JOIN profile ON users.CUI = profile.CUI WHERE profile.specialty = ?',[req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Display graduation year
route.get('/qgraduationyear/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT CUI, mail, graduation_year, type_user FROM users WHERE graduation_year = ?',[req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Display statistics
route.get('/statistics/(:id)', (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) return res.send(err)

        conn.query('SELECT graduation_year, type_user ,COUNT(*) FROM users WHERE type_user = ? GROUP BY graduation_year',[req.params.id], (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = route