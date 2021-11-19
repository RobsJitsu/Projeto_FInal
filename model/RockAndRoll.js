const mongoose = require("mongoose");  

const RockAndRollModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: String, required: true },
    musica: { type: String, required: true }, 
});

const RockAndRoll = mongoose.model("RockAndRoll",RockAndRollModel); 

module.exports = RockAndRoll