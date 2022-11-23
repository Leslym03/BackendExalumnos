const { verify } = require('jsonwebtoken')
const app = require('../app')

const route = require('express').Router()

route.get('/test', (req, res) => {
    res.json({message : 'testing'})
})

route.post("/log", (req, res) => {
    const user = {
        mail: "lmita@unsa.edu.pe",
        password: "root"
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
})

route.post("/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                message : 'testing', 
                authData: authData
            })
        }
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = route