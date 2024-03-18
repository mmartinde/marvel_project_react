const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const User = require ("../models/user.model");

const  secretKey= process.env.JWTSECRET;
//Funstion to login
async function login (req, res){
    try {
        const foundUser = await User.findOne({email: req.body.email});  // we are checking the email in our database if it exists or not
        if (!foundUser) {
            return res.status(400).json({msg:"Invalid credentials"});
        }
        else{
            const resultCompare = await bcrypt.compare(req.body.password, foundUser.password);
            if(!resultCompare){
                return res.status(400).json({msg:"Invalid credentials"});    // wrong password
            }
            else{
            const token = jwt.sign ({userId:foundUser._id}, secretKey,{expiresIn:'2h'}); 
            return res.status(200).json({msg:"ok", token: token, role: foundUser.role});  // correct username and password
            }
        }
    } catch (error) {
        console.log (error);
        return res.status(500).json({msg:"Error internal server"});
    }
};
// Function to sign up
async function signup (req, res){
    try {
       const hash = await bcrypt.hash(req.body.password, 10); // Hash the password with a salt round of  10
       const newUser = new User({email: req.body.email, password :hash, role:'user', name:req.body.name}); // Create a new user
       await newUser.save(); // Save user in database
       return res.json({msg: "User created!"}); // Return success message if user is created
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "error registering!"}); // Return an error message if there was one while creating the user
    }
};

async function deleteUser(id){
    try{
        const userDeleted = await User.findByIdAndDelete(id)
        return userDeleted
    } catch(error){
        console.log(error)
    }
  }

module.exports={
    login,
    signup,
    deleteUser,
};