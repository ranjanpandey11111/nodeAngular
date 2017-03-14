var express=require('express');
var router=express.Router();
var mongojs=require('mongojs');
var db =mongojs('mongodb://localhost:27017/smartbox',['users']);
router.get('/tasks',function(req,res,next){
	db.users.find(function(error,task){
		if(error){
			res.send(error);
		}else{
			res.json(task);
		}
	})
	
})

module.exports=router;