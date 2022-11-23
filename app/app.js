const express = require('express')

const port = process.env.PORT || 8000
const { urlencoded, json } = require('express')
const path = require('path')
const cors = require('cors')

const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()

const dbOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "exalumnos"
}

app.set('port', port)


app.use(cors())
app.use(urlencoded({extended: true}))
app.use(json())

app.use(myconn(mysql, dbOptions, 'single'))

app.get('/', (req, res) => {
    res.json({message : 'Backend ready'})
})

//CRUD users
app.use('/users', require('./routes/users.routes'))

//CRUD profile
app.use('/profile', require('./routes/profile.routes'))

//CRUD publication
app.use('/publication', require('./routes/publication.routes'))

//CRUD job
app.use('/job', require('./routes/job.routes'))

//search
app.use('/search', require('./routes/search.routes'))


module.exports = app