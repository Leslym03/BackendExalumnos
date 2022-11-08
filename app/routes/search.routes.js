//nombre, año egreso, especialidad, localidad

const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'search'})
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