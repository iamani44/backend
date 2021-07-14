const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/genera'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected!!')
})
app.use(express.json())

const alienRouter=require('./routers/datamed')
app.use('/datamed',alienRouter)


app.listen(9000, () => {
    console.log('Server has started')
})

