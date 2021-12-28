require('dotenv').config();

const mongoose = require('mongoose');

async function Conn(){
    await mongoose.connect( 
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.info('Database Online!');
    }).catch((err) => {
        console.info(err);
    });
};

module.exports = Conn;