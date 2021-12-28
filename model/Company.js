const mongoose = require("mongoose");  

const CompanyModel = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cnpj: { type: String, required: true },
    image: { type: String, required: true },
    fundation: { type: String, required: true },
});

const Company = mongoose.model("Company",CompanyModel); 

module.exports = Company; 