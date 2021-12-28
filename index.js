const express = require("express");  
const app = express();  
require('dotenv').config(); 
var cors = require("cors");
app.use(express.json());  
const port = 3000;

const Conn = require("./model/conn/index"); 

Conn(); 

app.use(cors());
app.options("*", cors());

app.get('/', (req,res) => {
    res.status(200).json({message:"rota index ok"});
})

const CompanyRouter = require("./routers/Company.routes");
app.use('/Company',CompanyRouter);

const CompaddressesRouter = require("./routers/Compaddresses.routes");
app.use('/Compaddresses',CompaddressesRouter);

const AddressesRouter = require("./routers/Addresses.routes");
app.use('/Compaddresses',CompaddressesRouter);

const CompfieldsRouter = require("./routers/Compfields.routes");
app.use('/Compfields',CompfieldsRouter); 

const FieldsRouter = require("./routers/Fields.routes");
app.use('/Compfields',CompfieldsRouter); 

const PrincipalRouter = require("./routers/Principal.routes");
app.use('/Principal',PrincipalRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});

