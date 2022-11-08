const app = require('./app/app')


app.listen(app.get('port'), (err) => {
    if (err){
        console.log(`there was error ${err}`)
    }else{
        console.log(`server running port ${app.get('port')}`)
    }
})