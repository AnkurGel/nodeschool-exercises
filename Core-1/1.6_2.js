// Previous problem statement(filter the directory contents by extension), but with the help of modules.

var fs = require('fs')
var mymodule = require('./1.6_1')
var directory = process.argv[2];
var extension = process.argv[3];
//var extension = new RegExp("\." + process.argv[3] + "$");


mymodule(directory, extension, function(error, files){
  if(error){
    throw error;
  }
  else{
    files.forEach(function(v, i){
      console.log(v);
    });
  }
});

