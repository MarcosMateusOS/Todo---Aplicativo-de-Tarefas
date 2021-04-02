
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
        
       const{email} = req.body;

        if(await UserModel.findOne({email}))
            return res.status(400).send({error:'E-mail já cadastrado'});
        else{
            const user = new UserModel(req.body);

            await user
                    .save()
                    .then(response =>{
                        return res.status(200).json(response);
                    })
                    .catch(error=>{
                        return res.status(500).json(error);
                    });


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