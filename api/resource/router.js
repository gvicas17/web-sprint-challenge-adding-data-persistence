// build your `/api/resources` router here

const express = require('express')
const router = express.Router()

const Resource = require('./model')

router.get('/', (req, res) => {
    
    Resource.findAll()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(() => {
        res.status(500).json({message: 'could not find resources'})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body
    Resource.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(() => {
        res.status(500).json({message: 'failed to add resource'})
    })
})
module.exports = router