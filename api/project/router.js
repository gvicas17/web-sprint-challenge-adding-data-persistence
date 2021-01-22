// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Project = require('./model')

router.get('/', (req, res) => {
    Project.findAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json ({message: 'could not find projects'})
    });
})



module.exports = router