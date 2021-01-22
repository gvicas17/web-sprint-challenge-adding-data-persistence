// build your server here

const express = require('express')

const projectRouter = require('./project/router')
const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')

const server = express()

server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to your app' })
})

module.exports = server