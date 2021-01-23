// build your `Resource` model here

const db = require('../../data/dbConfig')

module.exports = {
    findAllResources,
    add
}

function findAllResources(){
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