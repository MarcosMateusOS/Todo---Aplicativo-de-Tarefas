const { response } = require('express');
const TaskModel =  require('../model/TaskModel');
const {startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear
}
  = require('date-fns');
const current = new Date();

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
      await TaskModel
                  .findByIdAndUpdate({'_id':req.params.id}, req.body, {new: true})
                  .then(response =>{
                      return res.status(200).json(response);
                  })
                  .catch(error=>{
                      return res.status(500).json(error);
                   });

    }

    async all(req,res){
      await TaskModel
                  .find({ macaddress: {'$in': req.params.macaddress}})//filtadro pelo macaddress
                  .sort('when')//data e hora
                  .then(response =>{
                    return res.status(200).json(response); //Deu certo o get ALL todas as tasks
                  })
                  .cath(error => {
                    return res.status(500).json(error);
                  })

    }

    async show(req,res){
      await TaskModel
                .findById(req.params.id)
                .then(response =>{
                  if(response)
                    return res.status(200).json(response);
                  else
                  return res.status(404).json({error:'Tarefa não encontrada'});
                })
                .cath(error =>{
                  return res.status(500).json(error);
                });
    }

    async delete(req,res){

      await TaskModel
                  .deleteOne({'_id': req.params.id})
                  .then(response => {
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });

    }

    async done(req,res){

      await TaskModel
                  .findByIdAndUpdate( {'_id':req.params.id},{'done':req.params.done},{new:true})
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });
    }

    async late(req,res){            
      await TaskModel           //Operador do mongo para menor q lt
                  .find({'when':{'$lt':current}, 'macaddress':{'$in': req.params.macaddress}})
                  .sort('when')
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .catch(error=>{
                    return res.status(500).json(error);
                  });

    }

    async today(req,res){
      await TaskModel
                  .find({
                          'macaddress': {'$in': req.params.macaddress},
                          'when':{'$gte':startOfDay(current),'$lte':endOfDay(current)}
                                  //Maior que a data do dia         //Menor que
                      })
                  .sort('when')
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });

    }

    async week(req,res){
      await TaskModel
                  .find({
                          'macaddress': {'$in': req.params.macaddress},
                          'when':{'$gte':startOfWeek(current),'$lte':endOfWeek(current)}
                                  //Maior que a data do dia         //Menor que
                      })
                  .sort('when')
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });

    }


    async month(req,res){
      await TaskModel
                  .find({
                          'macaddress': {'$in': req.params.macaddress},
                          'when':{'$gte':startOfMonth(current),'$lte':endOfMonth(current)}
                                  //Maior que a data do dia         //Menor que
                      })
                  .sort('when')
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });

    }
    
    async year(req,res){
      await TaskModel
                  .find({
                          'macaddress': {'$in': req.params.macaddress},
                          'when':{'$gte':startOfYear(current),'$lte':endOfYear(current)}
                                  //Maior que a data do dia         //Menor que
                      })
                  .sort('when')
                  .then(response =>{
                    return res.status(200).json(response);
                  })
                  .cath(error =>{
                    return res.status(500).json(error);
                  });

    }
}


module.exports =  new TaskController();