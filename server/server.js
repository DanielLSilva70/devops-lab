require('dotenv').config()
const express = require('express')
const cors = require('cors')
const oath = require('path')
const app = express()

const Rollbar = require("rollbar");
const { allowedNodeEnvironmentFlags } = require('process')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
rollbar.log('Hello world')
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}) 

app.get('/rollbar-test', (req, res) => {
    try{
        test()
    } catch(error) {
        rollbar.warning(error)
    }
})



    
const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server running on ${port}`))
