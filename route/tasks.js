var express=require('express');
var router=express.Router();

router.get('/tasks',function(req,res,next){
	res.send("hi this is index page");
})

module.exports=router;