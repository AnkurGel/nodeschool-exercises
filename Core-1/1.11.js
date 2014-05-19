// Write an HTTP server that serves the same text file for each request it receives.
// You will be provided with the location of the file to serve.
// You must use the fs.createReadStream() method to stream the file contents to the response.

var http = require('http');
var fs = require('fs');
var filename = process.argv[3];
var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'})
  var src = fs.createReadStream(filename);
  src.pipe(res);
});
server.listen(+process.argv[2]);
