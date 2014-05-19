var concat = require('concat-stream')
var map = require('through2-map')
process.stdin.pipe(concat(function(chunk){
  var data = chunk.toString().split('').reverse().join('') + "\n";
  process.stdout.write(data)
}))
