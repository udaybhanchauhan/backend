var express = require('express');
var router = express.Router();
var connection= require ('../config/config');


router.post('/reviewList', function(req, res) {
  console.log("body: %j", req.body);
  
  const getAllReviewQuery=`select * from emp_rev`;
  console.log(" all review  query="+getAllReviewQuery);

  const resData=connection.connection.query(getAllReviewQuery,function(error, result){
          if(error){
              res.status(400).send({success: false,err: error});
          }else if(result.length>0){
              res.status(200).send({success:true,message:'successful fetched records','data':result});
          }else{
              res.status(403).send({success:false,message:'data not fould',data:null});
          }
  })
});

router.post('/addReview', function(req, res) {
    console.log("body: %j", req.body);
    const requestedReview=req.body;
    const addReviewQuery=`insert into emp_rev (emp_id,review_date,period,review_by,productivity,job_knowledge, relationships,initiative,creativity,comments,overall_performance)  values('${requestedReview.emp_id}','${requestedReview.review_date}','${requestedReview.period}','${requestedReview.review_by}','${requestedReview.productivity}','${requestedReview.job_knowledge}','${requestedReview.relationships}','${requestedReview.initiative}','${requestedReview.creativity}','${requestedReview.comments}','${requestedReview.overall_performance}')`;
           
        const resData=connection.connection.query(addReviewQuery,function(error, result){
            if(error){
                res.status(400).send({success: false,err: error});
            }else if(result.length>0){
                res.status(200).send({success:true,message:'successful added record','data':updateRes});                        
            }else{
                res.status(403).send({success:false,message:'insert error',data:null,err:error});
            }
        })
    
    
  });

  router.post('/updateReview', function(req, res) {
    console.log("body: %j", req.body);
    const requestedReview=req.body;
    
                const updateReviewQuery=`update emp_rev  set password=${requestedReview.password} where user_name='${requestedReview.username}'`;
                const updatedRecord=connection.connection.query(updateReviewQuery,function(updateErr, updateRes){
                    if(updateErr){
                        res.status(400).send({success: false,err: updateErr});
                    }else{
                        res.status(200).send({success:true,message:'successful review updated','data':updateRes});        
                    }
                });    
    });
module.exports = router;
