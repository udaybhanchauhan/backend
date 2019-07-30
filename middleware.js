let jwt =require('jsonwebtoken');
const config = require('./config/config');

console.log("111");

let checkToken = (req, res, next) =>{
    
    if(req.originalUrl=='/auth/authenticate'){
        //console.log("test="+req.originalUrl);
        next();
        return;
    }
    let token=req.headers['x-access-token'] || req.headers['authorization'];
    if(checkStartingToken(token)){
        // Remove Bearer from string
        token=token.slice(7,token.length);
    }
    if(token){
        jwt.verify(token,config.secret,(err, decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:'Token is not valid'
                })                
            }else{
                req.decoded=decoded;
                next();
            }
        });    
    }else{
        return res.json({
            success:false,
            message:'Auth token is not supplied'
        });
    }
}

let genrateToken= (res)=>{
    let token= jwt.sign({username:res.username},config.secret,{expiresIn:'24h'});
    return token;
}

module.exports ={
    checkToken,
    genrateToken
}

function checkStartingToken(value){
     if(value.slice(0, 6)=='Bearer ')
        return true;
      else  
        return false;
}