// Create a program that prints a list of files in a given directory, filtered by the extension of the files.

var fs = require('fs');
var directory = process.argv[2];
var extension = new RegExp("\." + process.argv[3] + "$");

fs.readdir(directory, function(err, data){
  var files = data.filter(function(x) { return x.match(extension); })
  files.forEach(function(v, i){
    console.log(v);
  })
})

