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

    async update(req,res){
      await TaskModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
            .then(response =>{
              res.status(200).json(response);
            })
            .catch(error=>{
                return res.status(500).json(error);
            });

    }

    async all(req,res){
      await TaskModel
                .find({ macaddress: {'$in': req.body.macaddress}})//filtadro pelo macaddress
                .sort('when')//data e hora
                .then(response =>{
                   return res.status(200).json(response); //Deu certo o get ALL todas as tasks
                })
                .cath(error => {
                  return res.status(500).json(error);
                })

    }


}

module.exports =  new TaskController();