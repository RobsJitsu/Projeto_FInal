const mongoose = require("mongoose");  

const ThrashMetalModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: String, required: true },
    musica: { type: String, required: true },
});

const ThrashMetal = mongoose.model("ThrashMetal",ThrashMetalModel); 

module.exports = ThrashMetal