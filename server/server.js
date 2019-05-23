require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use('/api', routes)

server.get('/', (req,res) => {
    res.send("BE is Working!")
})

const port = process.env.PORT || 3000
server.listen(port, () => {console.log(`listening on ${port}`)})