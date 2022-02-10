const express = require('express')
const cors = require('cors')
const oath = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('pubic'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
}) 
    
const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server running on ${port}`))
