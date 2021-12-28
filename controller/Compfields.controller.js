const Compfields = require("../model/Compfields"); 

function validaEntrada(res,requisicao){
    if(!requisicao.label){
        res.status(400).json({message: "Faltou label"});
        return true;
    }else if(!requisicao.id){
        res.status(400).json({message: "Faltou id"});
        return true;
    }else if(!requisicao.value){
        res.status(400).json({message: "Faltou value"});
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
    await Compfields.find({}).then((Compfields) => { 
        res.status(200).json(Compfields);
    }).catch((err) => {
        res.status(404).json({message:"Não foi encontrado"});
        console.error(err);
    });
}

exports.getSingle = async (req,res) => { 
    if(validaID(res,req.params.id)) return;
    await Compfields.findById(req.params.id).then((Compfields) => {
        res.status(200).json(Compfields);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum id encontrado"});
        console.error(err);
    });
}

exports.postCreate = async (req,res) => { 
    if(validaEntrada(res,req.body)) return;
    await Compfields.create(req.body).then( () => {
        res.status(201).json({message: "Fields inserido"})
    }).catch((err) => {
        res.status(400).json({message: "ERRO!!!"});
        console.error(err);
    });
}

exports.putUpdate = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    if(validaEntrada(res,req.body)) return;
    await Compfields.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Fields atualizado"})
    }).catch((err) => {
        res.status(400).json({message: "ERROR!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    if(validaID(res,req.params.id)) return;
    await Compfields.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Fields deletado"});
    }).catch((err) => {
        res.status(404).json({message: "Nenhum Fields encontrado"});
        console.error(err);
    });
}