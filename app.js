var express=require('express');
var app = express();

var index=require("./index_kr");

app.use('/index',index);

app.get ('/',function(req, res){
    res.send ("hello world");
});
app.listen(8000,function(){
    console.log("Listen to port 8000");
});
