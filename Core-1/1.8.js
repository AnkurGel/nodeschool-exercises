// Write a program that performs an HTTP GET request to a URL. 
// Collect all data from the server (not just the first "data" event)
// and then write two lines to the console (stdout).

var http = require('http');
var url = process.argv[2];

var content = []
http.get(url, function(response){
  response.on('data', function(data){
    content.push(data.toString());
  })
  response.on('end', function(){
    content = content.join('')
    console.log(content.length);
    console.log(content);
  })
})
