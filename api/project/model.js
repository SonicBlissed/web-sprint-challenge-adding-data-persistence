// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects')
}

const getProjectById = id => {
    return db('projects').where('id', id).first();
}

const getProjectTasks = projectId => {
    return db('tasks')
    .innerjoin('projects', 'tasks.project_id', 'projects.id')
    .where('project_id', projectId)
    .select([
        'tasks.id',
        'tasks.description',
        'tasks.notes',
        'tasks.completed',
        'projects.name',
        'projects.description'
    ])
}

const insertProject = project => {
    return db('projects').insert(project)
}

const insertTask = task => {
    return db('tasks').insert(task)
}

module.exports = {
    getProjects,
    getProjectById,
    getProjectTasks,
    insertProject,
    insertTask,
}