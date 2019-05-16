require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const server = express()


server.use(bodyParser.json())
server.use(cors())
server.use(helmet())
server.use(morgan('combined'))


server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req,res) => {
    res.send("Get is Working!")
    console.log("Get is working")
})
server.use('/api', routes)




const port = process.env.PORT || 4000
server.listen(port, () => {console.log(`listening on ${port}`)})