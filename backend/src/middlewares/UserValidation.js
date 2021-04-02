const User = require('../model/UserModel');

const UserValidation =  async (req,resp,next) =>{

    const { name, email , password } = req.body;

 
    

    if(!name)
        return resp.status(400).json({erro:'Nome é obrigatório'});
    else if(!email)
        return resp.status(400).json({erro:'Email obrigatório'});
    else if(!password)
        return resp.status(400).json({erro:'Senha obrigatório'});
    else{

        let exists = await User
                            .findOne(
                            {
                                'email':{'$in':email},
                            });

        if(exists)
        {
            return resp.status(400).json({erro:'Cadastro com esse email existente'});
        }

        next();
    }


}

module.exports = UserValidation;