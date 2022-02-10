const express = require('express')
const cors = require('cors')
const oath = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('pubic'))

// app.get('/', (req, res) => 
    
