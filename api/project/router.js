// build your `/api/projects` router here
const express = require('express');
const Projects = require('../project/model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const projects = await Projects.getProjects();
        return res.status(200).json(projects)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', ( req, res, next ) => {
    try {
        return res.status(200).json(req.project)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        await Projects.insertProject(req.body)
        return res.status(201).json(req.body)
    } catch (error) {
        next(error)
    }
})

router.get('/:id/tasks', async (req, res, next) => {
    try {
        const tasks = await Projects.getProjectTasks(req.params.id);
        return res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
})

router.post('/:id/tasks', async (req, res, next) => {
    try {
        await Projects.insertTask(req.body)
        return res.status(201).json(req.body)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router