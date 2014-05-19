// Write an HTTP server that receives only POST requests
// and converts incoming POST body characters to upper-case and returns it to the client.

var http = require('http');
var map = require('through2-map');

var port = +process.argv[2];

http.createServer(function(req, res){
  if(req.method == "POST"){
    req.pipe(map(function(chunk){
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
}).listen(port)
