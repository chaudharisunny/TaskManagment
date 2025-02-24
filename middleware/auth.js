const jwt=require('jsonwebtoken')
require('dotenv').config()

const secret=process.env.JWT_SECRET 
function createToken(user){
    const payload={
        username:user.username,
        email:user.email 
    }
    return jwt.sign(payload,secret,{expiresIn:'8h'})
}

function verifyToken(token){
    try {
        return jwt.verify(token)
    } catch (error) {
        console.log(error); 
    }
}

module.exports={createToken,verifyToken}