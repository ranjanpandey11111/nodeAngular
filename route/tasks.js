var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db =mongojs('mongodb://localhost:3001/meteor');
router.get('/tasks',function(req,res,next){
	db.packages.find(function(error,task){
		if(error){
			res.send(error);
		}else{
			res.json(task);
		}
	})
	
})

module.exports=router;