// build your `Task` model here

const db = require('../../data/dbConfig')

module.exports = {
    findAllTasks,
    add,
    getById
}
// SELECT
// p.project_description, p.project_name, t.task_description, t.task_completed, t.task_id, t.task_notes
// FROM tasks as t
// JOIN projects as p
// ON t.project_id = p.project_id;
function findAllTasks(){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_description', 'p.project_name', 't.task_description', 't.task_completed', 't.task_id', 't.task_notes')
}

// SELECT 
// p.project_id, p.project_name, t.task_description, t.task_completed, t.task_id, t.task_notes
// FROM tasks as t
// JOIN projects as p
// ON t.project_id = p.project_id;
// SELECT 
// p.project_id, p.project_name, t.task_description, t.task_completed, t.task_id, t.task_notes
// FROM tasks as t
// JOIN projects as p
// ON t.project_id = p.project_id;

// function getById(id){
//     return db('tasks as t')
//     .join('projects as p', 't.project_id', 'p.project_id')
//     .select('p.project_id', 'p.project_name', 't.task_description', 't.task_completed', 't.task_id', 't.task_notes')
//     .where({ 'project_id': id })
// }
function getById(id){
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_id', 'p.project_name', 't.task_description', 't.task_completed', 't.task_id', 't.task_notes')
    .where({ 'project_id': id })
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