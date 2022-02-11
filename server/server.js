require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const Rollbar = require("rollbar");
// const { allowedNodeEnvironmentFlags } = require('process')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
// rollbar.log('Hello world')
// rollbar.log('welp')
// try catch block
app.get('/', (req, res) => {
    try{
        rollbar.log('user hit test endpoint')
        test()
    } catch(error) {
        rollbar.error('not working')
        res.sendFile(path.join(__dirname, '../public/index.html'))
    }
})

// app.get('/users', (req, res) => {
//     res.send(200)
// })


// app.get('/', (req, res) => {
//     rollbar.log('someone made it to the site')
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })     




    
const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server running on ${port}`))
