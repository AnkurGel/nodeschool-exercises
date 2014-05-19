var map = require('through2-map')
var split = require('split')
var count = 0;
process.stdin.pipe(split("\n")).pipe(map(function(chunk){
  if(count++ % 2 == 0){
    return chunk.toString().toLowerCase() + "\n";
  }
  else{
    return chunk.toString().toUpperCase() + "\n";
  }

})).pipe(process.stdout)
