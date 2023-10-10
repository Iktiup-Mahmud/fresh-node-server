const express = require('express');
const cors = require('cors')
//color for color into terminal 
require('colors')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

async function run() {

}

run().catch(console.log())

app.get('/', (req, res) => {
    res.send('Server is UPP & runnning')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
