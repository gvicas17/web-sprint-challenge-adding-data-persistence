// build your `Resource` model here

const db = require('../../data/dbConfig')

module.exports = {
    findAll,
    add
}

function findAll(){
    return db('resources')
}

function add(resourceData){
    return db('resources')
    .insert(resourceData)
    .then(ids => {
        return (ids[0])
    })
}