const Principal = require("../model/Principal"); 

function validaEntrada(res,requisicao){
    if(!requisicao.name){
        res.status(400).json({message: "Faltou o nome"});
        return true;
    }else if(!requisicao.email){
        res.status(400).json({message: "Faltou o email"});
        return true;
    }else if(!requisicao.phone){
        res.status(400).json({message: "Faltou o telefone"});
        return true;
    }else if(!requisicao.cpf){
        res.status(400).json({message: "Faltou o cpf"});
        return true;
    }else if(!requisicao.image){
        res.status(400).json({message: "Faltou a imagem"});
        return true;
    }else if(!requisicao.stage_id){
        res.status(400).json({message: "Faltou stage_id"});
        return true;
    }else if(!requisicao.birthdate){
        res.status(400).json({message: "Faltou data de aniversário"});
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
    await Principal.find({}).then((Principal) => { 
        res.status(200).json(Principal);
    }).catch((err) => {
        res.status(404).json({message:"Não foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => { 
    if(validaID(res,req.params.id)) return;
    await Principal.findById(req.params.id).then((Principal) => {
        res.status(200).json(Principal);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum lead encontrado"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => { 
    if(validaEntrada(res,req.body)) return;
    await Principal.create(req.body).then( () => {
        res.status(201).json({message: "Lead inserido"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    if(validaEntrada(res,req.body)) return;
    await Principal.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Lead atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "ERROR!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    await Principal.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Lead deletado"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma Lead encontrado"});
        console.error(err);
    });
}