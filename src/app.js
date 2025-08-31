const express = require('express');
const app = express();

const connectDB = require('./config/database');

const User = require('./models/user');


// creating api using post  (sign up)

app.use(express.json()); // a middle ware to parse the json data in simple words it coverts json data to object


app.post("/signup", async (req, res)=>{

// handling the data dynamically 

 const user = new User(req.body)

 try{
    await user.save();
    res.send("user added successfully");
 }catch(err){
    res.status(400).send("Error saving user"+ err);w
    
 }
  
  // const userObj = {

  //     firstName: "Priyanshu",
  //     lastName: "Rane",
  //     password: "123456",
  //     email: "pV5Tt@example.com",
  //     gender: "male"
  // } 
  // // creating new instance of user Model 
  // const user = new User(userObj);

  // try{
  //   await user.save();
  //   res.send("user added successfully");
  // }catch(err){
  //   res.status(400).send("Error saving user"+ err);
  // }


})


// getting user  by emailid

app.get("/user", async (req, res)=>{

    const userEmail = req.body.email;

    try{
      const user = await User.find({email: userEmail});
      res.send(user);
    }catch(err){
      res.status(400).send("Error saving user"+ err);
    }
})


// feed API , finding all the data 

app.get("/feed", async (req, res)=>{

    try{
      const users = await User.find({});
      res.send(users);
    }catch(err){
      res.status(400).send("Error saving user"+ err); 
    }
})

// deleting the user

app.delete("/user", async (req, res)=>{

  const userId = req.body.userId;
  try{
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  }catch(err){
    res.status(400).send("Error deleting user"+ err);
  }
});

app.patch("/user/:userId", async (req, res)=>{

  

  try{

  const userId = req.params?.userId; // here is requesting userID
  const data = req.body;  // updated data;

  const ALLOWED_UPDATE_FIELDS = [ "firstName", "lastName", "password"];

  const isUpdateAllowed = Object.keys(data).every((k)=>
    ALLOWED_UPDATE_FIELDS.includes(k));

  if(!isUpdateAllowed){

    res.status(400).send("update not allowed")
  }
 
     await User.findByIdAndUpdate({_id: userId}, data,{
      returnDocument: "after",
      runValidators: true,
     });
    
     res.send("user updated successfully");
  }catch(err){
    res.status(400).send("Error updating user"+ err);
  }
 
  
})


// updating the user details


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




