const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const UserRoutes = require('./routes/UserRoutes');
server.use('/user',UserRoutes);

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task',TaskRoutes);




server.listen(8080, () =>{
    console.log('API ONLINE');
});