const mongoose = require("mongoose");  

const GrungeModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    vocalista: { type: String, required: true },
    ano: { type: String, required: true },
    musica: { type: String, required: true },
});

const Grunge = mongoose.model("Grunge",GrungeModel); 

module.exports = Grunge;