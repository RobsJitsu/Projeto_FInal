const Company = require("../model/Company"); 

function validaEntrada(res,requisicao){
    if(!requisicao.name){
        res.status(400).json({message: "Faltou o nome"});
        return true;
    }else if(!requisicao.email){
        res.status(400).json({message: "Faltou email"});
        return true;
    }else if(!requisicao.phone){
        res.status(400).json({message: "Faltou o telefone"});
        return true;
    }else if(!requisicao.cnpj){
        res.status(400).json({message: "Faltou o cnpj"});
        return true;
    }else if(!requisicao.image){
        res.status(400).json({message: "Faltou a imagem"});
        return true;
    }else if(!requisicao.fullname){
        res.status(400).json({message: "Faltou nome completo"});
        return true;
    }else if(!requisicao.fundation){
        res.status(400).json({message: "Faltou data de fundação"});
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
    await Company.find({}).then((Company) => { 
        res.status(200).json(Company);
    }).catch((err) => {
        res.status(404).json({message:"Não foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => { 
    if(validaID(res,req.params.id)) return;
    await Company.findById(req.params.id).then((Company) => {
        res.status(200).json(Company);
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma compania encontrada"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => { 
    if(validaEntrada(res,req.body)) return;
    await Company.create(req.body).then( () => {
        res.status(201).json({message: "Companhia inserida"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    if(validaEntrada(res,req.body)) return;
    await Company.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Companhia atualizada"})
    }).catch((err) => {
        res.status(400).json({message: "ERROR!!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    await Company.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Companhia deletada"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhuma companhia encontrada"});
        console.error(err);
    });
}