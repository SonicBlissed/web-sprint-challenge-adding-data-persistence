// build your `/api/projects` router here
const express = require('express');
const db = require('../project/model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const projects = await db.getProjects();
        return res.status(200).json(projects)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', ( req, res, next ) => {
    return res.status(200)
})
