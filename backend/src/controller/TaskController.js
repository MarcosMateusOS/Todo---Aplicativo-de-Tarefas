const TaskModel =  require('../model/TaskModel');

class TaskController{

    
    async create(req,res){
        const task =  new TaskModel(req.body);
        await task
              .save()//salva no mongo
              .then(response =>{
                return res.status(200).json(response);
              })//deu certo
              .catch(error =>{
                return res.status(500).json(error);
              });//deu errado
    }

}

module.exports =  new TaskController();