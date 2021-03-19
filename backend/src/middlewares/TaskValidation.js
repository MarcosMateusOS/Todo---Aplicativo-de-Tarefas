const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns'); //Data no passado


const TaskValidation =  async (req, resp, next) =>{

    const { macaddress,type, title, description, when } = req.body;
    

    if(!macaddress)
        return resp.status(400).json({erro: 'macaddress é obrigatório'});
    else if(!type)
        return resp.status(400).json({erro: 'type é obrigatório'});
    else if(!description)
        return resp.status(400).json({erro: 'Descrição é obrigatório'});
    else if(!title)
        return resp.status(400).json({erro: 'Título é obrigatório'});
    else if(!when)
        return resp.status(400).json({erro:'Data e Hora são obrigatórios'});
    else if(isPast(new Date(when)))
        return resp.status(400).json({erro:'Data invalida'});
    else{
        //Verifica se ah uma tarefa nessa horário
        let exists;

        exists = await TaskModel
                        .findOne(
                            {
                            'when':{'$eq': new Date(when)}, 
                            'macaddress': {'$in': macaddress}
                            });
        if(exists)
        {
            return resp.status(400).json({erro:'Tarefa existente nesse horário'});
        }

        next();
    }
    

}

module.exports = TaskValidation;