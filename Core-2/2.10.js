var trumpet = require("trumpet")
var fs = require('fs')
var map = require('through2-map')

var tr = trumpet();
var stream = tr.select('.loud').createStream()
stream.pipe(map(function(chunk){
  return chunk.toString().toUpperCase();
})).pipe(stream)
process.stdin.pipe(tr).pipe(process.stdout)

