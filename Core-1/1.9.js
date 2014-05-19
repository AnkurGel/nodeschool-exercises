// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). 
// However, this time you will be provided with three URLs as the first three command-line arguments.

// The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http');
var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];

var container = {}
process.argv.slice(2, process.argv.length).forEach(function(url,index){
  var content = [];
  http.get(url, function(response){
    response.on('data', function(data){
      content.push(data);
      container[index.toString()] = content.join('');
    });
    response.on('end', function(){
      if(Object.keys(container).length == 3){
        console.log(container['0']);
        console.log(container['1']);
        console.log(container['2']);
      }
    });
  });
})

