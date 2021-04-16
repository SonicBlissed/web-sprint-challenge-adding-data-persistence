// start your server here






//yes I know the DB's are empty. I emptied them after testing
const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./api/project/router');
const resourceRouter = require('./api/resource/router');

const server = express();
const port = process.env.PORT || 5000;



server.use(helmet());
server.use(express.json());

server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);


server.use((req, res, next, err) => {    
    console.log(err);

    return res.status(500).json({
        errorMessage: 'Server error'
    }) 
});

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});