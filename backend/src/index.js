const express = require('express');



const server = express();
server.use(express.json());


const UserRoutes = require('./routes/UserRoutes');
server.use('/user',UserRoutes);

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task',TaskRoutes);


server.listen(8080, () =>{
    console.log('API ONLINE');
});