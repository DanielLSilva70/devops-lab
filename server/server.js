require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const Rollbar = require("rollbar");
// const { allowedNodeEnvironmentFlags } = require('process')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
rollbar.log('Hello world')
rollbar.log('welp')
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
// try catch block
// app.get('/rollbar-test', (req, res) => {
//     try{
//         rollbar.log('user hit test endpoint')
//         test()
//     } catch(error) {
//         rollbar.error('not working')
//         res.sendStatus(400)
//     }
// })


app.get('/', (req, res) => {
    rollbar.log('someone made it to the site')
    res.sendFile(path.join(__dirname, '../public/index.html'))
})     


    
const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server running on ${port}`))
