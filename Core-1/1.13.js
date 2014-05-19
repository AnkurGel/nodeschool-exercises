var http = require('http');
var url = require('url');

var port = +process.argv[2];
var server = http.createServer(function(request, response){
  var obj = url.parse(request.url, true)
  if(obj.pathname == "/api/parsetime" || obj.pathname == "/api/unixtime"){
    console.log("HERE")
    response.writeHead(200, {
      'content-type': 'application/json'
    });
    var iso = obj.query.iso;
    var date = new Date(iso);
    var result = {}
    if(obj.pathname == "/api/parsetime"){
      result['hour'] = date.getHours();
      result['minute'] = date.getMinutes();
      result['second'] = date.getSeconds();

    }
    else{
      result['unixtime'] = date.getTime();
    }
    response.write(JSON.stringify(result));
    response.end();
  }
  else { response.end(); }
}).listen(port);
