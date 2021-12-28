const mongoose = require("mongoose");  

const CompfieldsModel = new mongoose.Schema({ 
    label: { type: String, required: true }, 
    id: { type: String, required: true },
    value: { type: String, required: true },
});

const Compfields = mongoose.model("Compfields",CompfieldsModel); 

module.exports = Compfields;