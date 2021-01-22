// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()

const Task = require('./model')

router.get('/', (req, res) => {
    
    Task.findAll()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(() => {
        res.status(500).json({message: 'could not find tasks'})
    })
})

router.post('/', (req, res) => {
    const taskData = req.body
    Task.add(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to add tasks'})
    })
})
module.exports = router
