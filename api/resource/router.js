// build your `/api/resources` router here
const express = require('express');
const Resources = require('../resource/model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
     const resources = await Resources.getResources();
     return res.status(200).json(resources);
    } catch(error) {
        next(error)
    }
 })

 router.post('/', async (req, res, next) => {
    try{
        await Resources.addResource(req.body)
        return res.status(201).json(req.body)
    } catch(error) {
        next(error)
    }
})

module.exports = router