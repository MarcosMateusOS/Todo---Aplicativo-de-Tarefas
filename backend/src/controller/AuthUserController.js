const express =  require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const authConfig =  require('../config/auth');

const UserModel = require('../model/UserModel');

function generateToke(params = {}){
    
    return jwt.sign(params,authConfig.secret, {
        expiresIn: 86400, //tempo que o token expira
    });
}


class UserController{

    async register(req,res){
        
       
        try{
            const user = await UserModel.create(req.body);
            user.password = undefined;
            return  res.send({ user , token: generateToke({id: user.id})});
        } catch(err){

            return res.status(400).send({erro:'Falha no registro'});
        }
    
    }

    async authenticate(req,res){

        const {email,password} = req.body;

        const user = await UserModel.findOne({email}).select('+password');

        if(!user)
           return res.status(400).send({error: 'Usuário inexistente'});
        
        if(!await bcrypt.compare(password,user.password))
            return res.status(400).send({error: 'Senha invalida'});

        user.password = undefined;

        

        res.send({ user , token: generateToke({id: user.id})});

    }

}

module.exports = new UserController();