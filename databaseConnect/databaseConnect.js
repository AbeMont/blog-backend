const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.DATABASE_URL;


const databaseConnect = async ()=>{
    try {

        const connect = await mongoose.connect(dbURL);

        console.log(`DB Connected. ${connect.connection.name}`);

    } catch (error) {
        console.log(`Error in connecting to DataBase: ${error.message}`)
    }
}

module.exports = { databaseConnect }