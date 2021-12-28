const mongoose = require("mongoose");  

const CompaddressesModel = new mongoose.Schema({ 
    state: { type: String, required: true }, 
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    postalcode: { type: String, required: true }, 
    address: { type: String, required: true }, 
    number: { type: String, required: true },
    complement: { type: String, required: true },
    placeId: { type: String, required: true },  
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    prefered: { type: String, required: true }, 
    type: { type: String, required: true }, 
});

const Compaddresses = mongoose.model("Compaddresses",CompaddressesModel); 

module.exports = Compaddresses


