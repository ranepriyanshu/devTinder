const express = require('express');
const app = express();

const connectDB = require('./config/database');


connectDB()
   .then(()=>{

    console.log("Connected to DB");

    app.listen(7777, ()=>{
        console.log('Server running at http://localhost:7777');
    });

   })
   .catch((err)=>{
    console.error("DB connection failed", err);
   });




