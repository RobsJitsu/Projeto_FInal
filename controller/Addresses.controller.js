const Addresses = require("../model/Addresses"); 

function validaEntrada(res,requisicao){
    if(!requisicao.state){
        res.status(400).json({message: "Faltou o estado"});
        return true;
    }else if(!requisicao.city){
        res.status(400).json({message: "Faltou a cidade"});
        return true;
    }else if(!requisicao.neighborhood){
        res.status(400).json({message: "Faltou o bairro"});
        return true;
    }else if(!requisicao.postalcode){
        res.status(400).json({message: "Faltou CEP"});
        return true;
    }
    else if(!requisicao.address){
        res.status(400).json({message: "Faltou o endereço"});
        return true;
    }else if(!requisicao.number){
        res.status(400).json({message: "Faltou o número"});
        return true;
    }else if(!requisicao.complement){
        res.status(400).json({message: "Faltou o complemento"});
        return true;
    }else if(!requisicao.placeid){
        res.status(400).json({message: "Faltou id"});
        return true;
    }
    else if(!requisicao.longitude){
        res.status(400).json({message: "Faltou a longitude"});
        return true;
    }else if(!requisicao.latitude){
        res.status(400).json({message: "Faltou a latitude"});
        return true;
    }else if(!requisicao.prefered){
        res.status(400).json({message: "Faltou a preferencia"});
        return true;
    }else if(!requisicao.type){
        res.status(400).json({message: "Faltou o tipo"});
        return true;
    }
}

function validaID(res,id){
    if(id.length != 24){
        res.status(400).json({message: "Erro no ID"});
        return true;
    }
}

exports.getAll = async (req,res) => {
    await Addresses.find({}).then((Addresses) => { 
        res.status(200).json(Addresses);
    }).catch((err) => {
        res.status(404).json({message:"Não foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => { 
    if(validaID(res,req.params.id)) return;
    await Addresses.findById(req.params.id).then((Addresses) => {
        res.status(200).json(Addresses);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum endereço encontrado"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => { 
    if(validaEntrada(res,req.body)) return;
    await Addresses.create(req.body).then( () => {
        res.status(201).json({message: "Endereço inserido"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    if(validaEntrada(res,req.body)) return;
    await Addresses.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Endereço atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    await Addresses.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Endereço deletado"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhum endereço encontrado"});
        console.error(err);
    });
}