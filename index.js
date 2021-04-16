// start your server here
const express = require('express');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use((req, res, next, err) => {    
    console.log(err);

    return res.status(500).json({
        errorMessage: 'Server error'
    }) 
});

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});