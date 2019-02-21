/*
var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('hello');

});
server.listen(port,hostname,function(){
	console.log("Server running at http://"+hostname+":"+port+"/");
});
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	var filePath = '.'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.end('not found');
		}
	});
});

server.listen(3000,'127.0.0.1',function(){
	console.log("Sever is running at http://127.0.0.1:3000");
})
