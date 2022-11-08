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

app.use('/api', require('./routes/test.routes'))






module.exports = app