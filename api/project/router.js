// build your `/api/projects` router here

const express = require('express')
const router = express.Router()

const Project = require('./model')

router.get('/', (req, res) => {
    
    Project.findAll()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(() => {
        res.status(500).json({message: 'could not find projects'})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    Project.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to add project'})
    })
})
module.exports = router