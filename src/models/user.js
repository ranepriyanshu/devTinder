const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName:{

        type: String,
        required: true
    },
    
    lastName:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    gender:{
        type: String,
        required: true   
    }
,
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: 18
    },
    photoUrl:{
        type: String,
     
    },

    about:{
        type: String,
        default: "this is the default about the user"
    },
    skills:{
        type: [String],
    },


});


module.exports= mongoose.model('User', userSchema);