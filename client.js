//load http
var http =require("http");

//create http server and listen on port 8000 for request
http.createServer(function(request, response){

//set the response http header with http status and content type
response.writeHead(100, {'Content-Type': 'text/plain'});

//send the response body "hello world"
response.end('Hello World\n');
}).listen(8000);


//print url for accessing server
console.log('Server running at http://127.0.0.1:8000/');
