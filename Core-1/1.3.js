// Write a program that uses a single synchronous filesystem operation to read a file
// and print the number of newlines it contains to the console (stdout), 
// similar to running cat file | wc -l.

var fs = require('fs');
var filename = process.argv[2];
var filecontent = fs.readFileSync(filename).toString().split('\n');
console.log(filecontent.length - 1);
