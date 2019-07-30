var express = require('express');
var router = express.Router();
var connection= require ('../config/config');


router.post('/ip_info', function(req, res) {
  const getIPDetailsQuery=`select *, ipId as id from tbl_ipinfo`;
  const resData=connection.connection.query(getIPDetailsQuery,function(error, result){
          if(error){
              res.status(400).send({success: false,err: error});
          }else if(result.length>0){
              res.status(200).send({success:true,message:'successful fetched records','data':result});
          }else{
              res.status(403).send({success:false,message:'data not fould',data:null});
          }
  })
});

module.exports = router;