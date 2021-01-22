// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()

const Task = require('./model')

router.get('/', (req, res) => {
    Task.findAll()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(() => {
      res.status(500).json ({message: 'could not find tasks'})
    });
})

module.exports = router