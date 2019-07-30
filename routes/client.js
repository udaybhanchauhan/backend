var express = require('express');
var router = express.Router();
var connection= require ('../config/config');


router.post('/clientList', function(req, res) {
  const getAllClientQuery=`select * from clients where is_deleted=0`;
  const resData=connection.connection.query(getAllClientQuery,function(error, result){
          if(error){
              res.status(400).send({success: false,err: error});
          }else if(result.length>0){
              res.status(200).send({success:true,message:'successful fetched records','data':result});
          }else{
              res.status(403).send({success:false,message:'data not fould',data:null});
          }
  })
});

router.post('/deleteClient', function(req, res) {
    
    const requestedClient=req.body;
    const checkClientExist=`select * from clients where tokuisaki_code='${requestedClient.tokuisaki_code}' and is_deleted=0 `;
    

    if(requestedClient.tokuisaki_code){
        const resData=connection.connection.query(checkClientExist,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                const updateClientRecord=`update clients set is_deleted=1 where tokuisaki_code='${requestedUser.tokuisaki_code}' `;
                const updatedRecord=connection.connection.query(updateClientRecord,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful delete record','data':updateRes});        
                    }
                });
                //res.status(200).send({success:true,message:'successful fetched records','data':result});
            }else{
                res.status(403).send({success:false,message:'requested client does not exist',data:null});
            }
        })
    }else{
        res.status(403).send({success:false,message:'tokuisaki code is missing',data:null});
    }
    
  });

  router.post('/updateClient', function(req, res) {
    
    const requestedClient=req.body;
    const checkClientExist=`select * from clients where tokuisaki_code='${requestedUser.tokuisaki_code}' `;
    console.log("user query="+checkClientExist);

    if(requestedClient.username && requestedUser.password){
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
