var express = require('express');
var router = express.Router();
var connection= require ('../config/config');
// make a connection with db
// connection.connection.connect((err)=>{
//   if(err){
//     console.log('Error connecting'+err.stack);
//     return;
//   }
//   console.log('connected as id='+connection.threadId);
// })
/* GET users listing. */

router.post('/userList', function(req, res) {
  console.log("body: %j", req.body);
  
  const getAllUserQuery=`select * from ips_users where is_deleted=0`;
  console.log("user query="+getAllUserQuery);

  const resData=connection.connection.query(getAllUserQuery,function(error, result){
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
    console.log("user query="+checkUserExist);

    if(requestedUser.username){
        const resData=connection.connection.query(checkUserExist,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                const updateUserRecord=`update ips_users set is_deleted=1 where user_name='${requestedUser.username}' `;
                const updatedRecord=connection.connection.query(updateUserRecord,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful delete record','data':updateRes});        
                    }
                });
                //res.status(200).send({success:true,message:'successful fetched records','data':result});
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
    console.log("user query="+checkUserExist);

    if(requestedUser.username && requestedUser.password){
        const resData=connection.connection.query(checkUserExist,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                const updateUserRecord=`update ips_users  set password=${requestedUser.password} where user_name='${requestedUser.username}'`;
                const updatedRecord=connection.connection.query(updateUserRecord,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful password updated','data':updateRes});        
                    }
                });
                //res.status(200).send({success:true,message:'successful fetched records','data':result});
            }else{
                res.status(403).send({success:false,message:'requested user does not exist',data:null});
            }
        })
    }else{
        res.status(403).send({success:false,message:'user or password missing',data:null});
    }
    
  });
module.exports = router;
