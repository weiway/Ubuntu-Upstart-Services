var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    //console.log("node app running on port 80...");
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/home',function(req,res){
    res.redirect('/');
});
app.get('*', function(req, res){
  res.status(404).send("PAGE NOT FOUND");
});


var server = http.createServer(app);
server.listen(3000,function(){
	console.log("Starting Server...");
	console.log("Node app running on port: 80")
});
