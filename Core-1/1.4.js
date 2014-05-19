// Write a program that uses a single asynchronous filesystem operation to read a file
// and print the number of newlines it contains to the console (stdout), 
// similar to running cat file | wc -l.

var fs = require('fs');
var filename = process.argv[2];
var content;
function readContent(callback){
  fs.readFile(filename, function(err, data){
    if(err) throw err;
    callback(data.toString());
  });
}
readContent(function(content){ 
  console.log(content.split('\n').length - 1);
})
