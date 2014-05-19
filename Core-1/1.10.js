// Write a TCP time server!

// Your server should listen to TCP connections on the port provided. 
// For each connection you must write the current date & time in the format: "YYYY-MM-DD hh:mm"


var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function(socket){
  console.log("Server connected!");

  socket.write(strftime('%F %H:%M'))
  socket.end();
})
var port = parseInt(process.argv[2]);
server.listen(port);
