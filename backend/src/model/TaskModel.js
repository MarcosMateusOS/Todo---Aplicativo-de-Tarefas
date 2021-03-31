const mongoose = require('../config/database');

const Schema =  mongoose.Schema;

//Representação das Tarefas no back-end
const TaskSchema =  new Schema({
    
    /*
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    */
    macaddress: {type : String,required: true}, //indentificação do celular
    type: {type : Number, required: true}, //tipo de tarefa
    title: {type: String, required: true}, //titulo da tarefa
    description: {type: String, required:true}, //descrição da tarefa
    when: {type: Date, required:true}, //data q marca da tarefa hora e dia
    done: {type: Boolean, default: false}, //se ela foi concluida 
    created: {type: Date, default: Date.now()} //Data exata q ele foi criada

});
                                //Como irar ser colocado no banco
module.exports = mongoose.model('Task', TaskSchema);