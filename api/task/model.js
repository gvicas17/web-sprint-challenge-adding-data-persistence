// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
   findAll,
}

function findAll(){
    return db('projects')
}