const validator = require("validator");

const validateSignUpdata = (req)=>{
    const { firstName, lastName, email } = req.body;

    
    if(!firstName || !lastName){
        throw new Error("Name is required");
    }

    else if(!validator.isEmail(email)){
        throw new Error("Email is invalid");
    }
};

module.exports = validateSignUpdata;