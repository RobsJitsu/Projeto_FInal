const mongoose = require("mongoose");  

const FieldsModel = new mongoose.Schema({ 
    label: { type: String, required: true }, 
    id: { type: String, required: true },
    value: { type: String, required: true },
});

const Fields = mongoose.model("Fields",FieldsModel); 

module.exports = Fields;