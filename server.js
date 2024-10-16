const express = require('express');
const cors = require('cors');
const router = require('./router/router');
const { databaseConnect } = require('./databaseConnect/databaseConnect')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({extended: true, limit: '30mb'}));

app.get('/', ( req, res )=>{
    res.send("Server is connected client-side. API is ready!");
});

databaseConnect();

app.use('/api', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server connected on PORT:${PORT}`);
});