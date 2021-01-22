// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    add
}

function findAll(){
    return db('tasks')
}

function add(taskData){
    return db('tasks')
    .insert(taskData)
    .then(newTask => {
        return db('tasks')
        .where('task_id', newTask[0])
        .then(selectedTask => {
            return (selectedTask)
        })
    })
}