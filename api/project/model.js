// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    add
}

function findAll(){
    return db('projects')
}

function add(projectsData){
    return db('projects')
    .insert(projectsData)
    .then(ids => {
        return (ids[0])
    })
}