var express = require('express');
var mongoose =require('mongoose');
var uuidv1 = require('uuid/v1')
var router = express.Router();


mongoose.connect('mongodb://localhost:27017/test123');

mongoose.connection.on('open',function(){
	console.log("mongosse connected");
});

var Schema=mongoose.Schema;

var device=new Schema({
	name:String,
	type:String,
	uuid:String
});

var Device=mongoose.model('Device',device);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/devices',function(req,res){

	Device.find({},function(err,data){
		
	if(err){
		console.log(err);
	}

	else{
		console.log(data);
		//res.send()
		res.render('device',{data:data});
		}



	});

});

router.post('/create',function(req,res,next){

	console.log(req.body.name);
	console.log("***************")
	console.log(uuidv1());
	console.log("***************")

	var newDevice={
			name:req.body.name,
			type:req.body.type,
			uuid: uuidv1()
			}

	Device.create(newDevice,function(err,data){
		
	if(err){
		console.log(err);
	}

	else{

		//res.send(data);
		res.redirect("/devices");
		}



	});
});

router.post('/del',function(req,res,next){
		
		console.log(req.body.name);
		
		var newDevice={
				name:req.body.name,
				type:req.body.type
				}
		
		Device.remove(newDevice,function(err,data){
				
			if(err){
				console.log(err);
			}
		
			else{
		
			//res.send(data);
			res.redirect("/devices");
			}
		
		
		
		});
});



router.post('/update',function(req,res,next){
    console.log("Comming Here....")
	console.log(req.body.name);
			
				// var Unewser={
				// 		name1:req.body.name,
				// 		email:req.body.email
				// 		}
			
	Device.findOneAndUpdate({'name':req.body.name},
		{'type':req.body.type},function(err,data){
					
			if(err){
					console.log(err);
			}
			
			else{
			
				//res.send(data);
				res.redirect("/devices");
				//console.log("updated successfully");
			}
			
			
			
		});
});
module.exports = router;
