const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());




const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task',TaskRoutes);

/*
const UserRoutes = require('./routes/UserRoutes');
server.use('/user',UserRoutes);
*/
server.listen(8080, () =>{
    console.log('API ONLINE');
});