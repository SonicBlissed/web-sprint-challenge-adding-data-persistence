// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

const insertResource = resource => {
    return db('resources').insert(resource)
}

module.exports = {
    getResources,
    insertResource,
}