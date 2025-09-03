
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const adminAuth =  async(req, res, next)=>{

    // read the token form the requested cookies 
   try{ const {token} = req.cookies;

   if(!token){
    throw new Error("Token not found");
   }

    const decoded =  await jwt.verify(token, "secret");

    // const {_id} = decoded;

    // const user = await User.findOne({_id});

const { id } = decoded;
const user = await User.findById(id);


    if(!user){

        throw new Error("User not found");
    }
   else {

        req.user = user;
        next();}
    
}catch (err){

    res.status(401).send("Unauthorized"+ err.message);
}

}


module.exports = {adminAuth};