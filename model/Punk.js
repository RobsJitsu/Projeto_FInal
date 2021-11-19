const mongoose = require("mongoose");  

const PunkModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: String, required: true },
    musica: { type: String, required: true },
});

const Punk = mongoose.model("Punk",PunkModel); 

module.exports = Punk;