var map = require('through2-map')

process.stdin.pipe(map(function(chunk){
  return chunk.toString().toUpperCase();
})).pipe(process.stdout)
