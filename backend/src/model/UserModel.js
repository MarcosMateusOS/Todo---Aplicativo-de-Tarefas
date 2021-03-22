const mongoose = require('../config/database');

const bcrypt = require('bcryptjs'); //Biblioteca  para criptografar as senhas


const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {   
        type: String, 
        required:true
    },

    email:  {
        type: String,
        unique: true, 
        required:true,
        lowercase: true
    },

    password: {
        type: String, 
        required: true,
        select:false, //senha n vem no array de usuarios
    },
    createdAt:{

        type:Date,
        default: Date.now,
    },
    
    

});

//Antes de salvar o usuário "usar o pre"
UserSchema.pre('save', async function(next) {

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;


    next();
});


module.exports = mongoose.model('User',UserSchema);