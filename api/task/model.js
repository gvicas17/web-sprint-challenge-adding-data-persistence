// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    add
}

function findAll(){
    return db('tasks')
}

function add(tasksData){
    return db('tasks')
    .insert(tasksData)
    .then(ids => {
        return (ids[0])
    })
}