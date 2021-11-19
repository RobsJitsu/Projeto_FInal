const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json());  

const Conn = require("./model/conn/index"); 

Conn(); 

app.get('/', (req,res) => {
    res.status(200).json({message:"rota index ok"});
})

const HeavyMetalRouter = require("./routers/HeavyMetal.routes");
app.use('/HeavyMetal', HeavyMetalRouter);

const RockAndRollRouter = require("./routers/RockAndRoll.routes");
app.use('/RockAndRoll',RockAndRollRouter);

const ThrashMetalRouter = require("./routers/ThrashMetal.routes");
app.use('/ThrashMetal',ThrashMetalRouter);

const PunkRouter = require("./routers/Punk.routes");
app.use('/Punk',PunkRouter); 

const GrungeRouter = require("./routers/Grunge.routes");
app.use('/Grunge',GrungeRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});