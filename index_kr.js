var express=require('express');

var router=express.Router();

router.get('/',function(req,res){
    res.send("welcome to my world!!!");

})

router.get('/hello',function(req,res){
    res.send("HELLOOOOO!!");
})

module.exports=router;


