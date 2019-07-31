var express = require('express');
var router = express.Router();
var middleware=require('../middleware');
var connection= require ('../config/config');


router.post('/authenticate',function(req,res){  
    console.log("body: %j", req.body);
    var requestedUser;
    requestedUser=req.body;
    const getUserQuery=`select * from emp where emp_id='${requestedUser.username}' and password='${requestedUser.password}'`;
    

    connection.connection.query(getUserQuery,function(error, result){
            if(error){
                res.status(401).send({success: false,err: error});
            }else if(result.length>0){
                var token=middleware.genrateToken(requestedUser);
                res.status(200).send({success:true,message:'Authentication successful!',token:token,'data':result[0]});
            }else{
                res.status(403).send({success:false,message:'Incorrect username or password'});
            }
    })
    
  })


  router.post('/updatePassword', function(req, res) {
    
    const requestedClient=req.body;
    
    const validatePasswordQuery=`select password from emp where emp_id='${requestedClient.empId}' `;
    
   

    if(requestedClient.empId && requestedClient.password){
        const resData=connection.connection.query(validatePasswordQuery,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else{
                const dbPassword=result['password'];
               if(dbPassword===requestedClient.password){
                    const updateUserRecord=`update emp  set password=${requestedClient.password} where emp_id='${requestedClient.empId}'`;
                    connection.connection.query(updateUserRecord,function(updateErr, updateRes){
                        if(updateErr){
                            res.status(400).send({success: false,err: updateErr});
                        }else{
                            res.status(200).send({success:true,message:'successful password updated','data':updateRes});        
                        }
                    });
                }    //res.status(200).send({success:true,message:'successful fetched records','data':result});
            }
        })
    }else{
        res.status(403).send({success:false,message:'emp id or password missing',data:null});
    }
    
  });



  router.post('/validateToken',function(req,res){
        res.status(200).send({success:true,message:'Token is valid'});
  })

  module.exports = router