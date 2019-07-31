var express = require('express');
var router = express.Router();
var connection= require ('../config/config');


router.post('/userList', function(req, res) {
  console.log("body: %j", req.body);
  
  const getAllUserQuery=`select * from emp `;
  

  connection.connection.query(getAllUserQuery,function(error, result){
          if(error){
              res.status(400).send({success: false,err: error});
          }else if(result.length>0){
              res.status(200).send({success:true,message:'successful fetched records','data':result});
          }else{
              res.status(403).send({success:false,message:'data not fould',data:null});
          }
  })
});

router.post('/deleteUser', function(req, res) {
    console.log("body: %j", req.body);
    const requestedUser=req.body;
    const checkUserExist=`select * from ips_users where user_name='${requestedUser.username}' and is_deleted=0 `;
    

    if(requestedUser.username){
        connection.connection.query(checkUserExist,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                const updateUserRecord=`update ips_users set is_deleted=1 where user_name='${requestedUser.username}' `;
                connection.connection.query(updateUserRecord,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful delete record','data':updateRes});        
                    }
                });
               
            }else{
                res.status(403).send({success:false,message:'requested user does not exist',data:null});
            }
        })
    }else{
        res.status(403).send({success:false,message:'user is missing',data:null});
    }
    
  });

  router.post('/updateUser', function(req, res) {
    console.log("body: %j", req.body);
    const requestedUser=req.body;
    const checkUserExist=`select * from ips_users where user_name='${requestedUser.username}' `;
  

    if(requestedUser.username && requestedUser.password){
        connection.connection.query(checkUserExist,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                const updateUserRecord=`update ips_users  set password=${requestedUser.password} where user_name='${requestedUser.username}'`;
                connection.connection.query(updateUserRecord,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful password updated','data':updateRes});        
                    }
                });
               
            }else{
                res.status(403).send({success:false,message:'requested user does not exist',data:null});
            }
        })
    }else{
        res.status(403).send({success:false,message:'user or password missing',data:null});
    }
    
  });
module.exports = router;
