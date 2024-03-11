const jwt = require('jsonwebtoken');
const User = require ('../models/user.model');

async function isAuthenticated(req,res,next) {
    const  token = req.query.token; // get the token from url parameter or header
    const  secretKey= process.env.JWTSECRET; 
    
    if (!token) {
        return res.status(401).json({ msg: 'No token provided.' });
    }
    else {
        const tokenDecoded = jwt.verify(token,secretKey);
        const userId=tokenDecoded.userId;
        const foundUser = await User.findById(userId);
        if(!foundUser){
            return res.status(401).json({msg: 'Failed to authenticate'});
        }
        else{
            if(foundUser.role !=="admin"){
                return res.status(403).json({msg:"You don't have admin access."})
            }
            else {
                next();
            }
        }
    }
}
async function isAdmin(req,res,next) {

};


module.exports={
    isAuthenticated,
    isAdmin,
}