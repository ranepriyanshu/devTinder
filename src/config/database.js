const mongoose = require('mongoose');


// l583zf5PtyD5xzzx

const connectDB = async ()=>{

    await mongoose.connect("mongodb+srv://priyanshurane09:l583zf5PtyD5xzzx@cluster0.y6yvoow.mongodb.net");
};

module.exports = connectDB

