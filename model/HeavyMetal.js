const mongoose = require("mongoose");  

const HeavyMetalModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: String, required: true },
    musica: { type: String, required: true },
});

const HeavyMetal = mongoose.model("HeavyMetal",HeavyMetalModel); 

module.exports = HeavyMetal; 