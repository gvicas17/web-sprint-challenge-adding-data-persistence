// build your server here

const express = require('express')

const server = express()
const projectRouter = require('./project/router')

server.use(express.json())
server.use('/api/projects', projectRouter)


server.get('/', (req, res) => {
    res.status(200).json({message: 'welcome to your sprint challenge'})
})

module.exports = server