var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");

var index =require("./route/index");
var tasks =require("./route/tasks");

var port =3080;

var app=express();

//view Engine
app.set("views",path.join(__dirname,'views'));
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);

//Set Static folder

app.use(express.static(path.join(__dirname,'client')));

//body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function(){
	console.log("server started on " +port)
});



