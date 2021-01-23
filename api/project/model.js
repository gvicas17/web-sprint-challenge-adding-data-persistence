// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAllProjects,
    add
}

function findAllProjects(){
    return db('projects')
}

function add(projectData){
    return db('projects')
    .insert(projectData)
    .then(newProject => {
        return db('projects')
        .where('project_id', newProject[0])
        .then(selectedProject => {
            return (selectedProject)
        })
    })
}