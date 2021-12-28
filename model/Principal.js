const mongoose = require("mongoose");  

const PrincipalModel = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cpf: { type: String, required: true },
    image: { type: String, required: true },
    stage_id: { type: String, required: true },
    birthdate: { type: String, required: true },
    formtoken: { type: String, required: true },
});

const Principal = mongoose.model("Principal",PrincipalModel); 

module.exports = Principal;