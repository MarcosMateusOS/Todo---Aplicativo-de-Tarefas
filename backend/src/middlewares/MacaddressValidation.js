const MacaddressValidation = (req,res,next) =>{

    if(!req.body.macaddress)
        return resp.status(400).json({erro: 'macaddress é obrigatório'});
    else
        next();
};

module.exports = MacaddressValidation;