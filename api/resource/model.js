// build your `Resource` model here

const { where } = require('../../data/dbConfig')
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
    .then(newResource => {
        return db('resources')
        .where('resource_id', newResource[0])
        .then(selectedResource => {
            return (selectedResource)
        })
    })
}