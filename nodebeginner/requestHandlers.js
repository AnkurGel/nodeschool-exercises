var exec = require('child_process').exec
var querystring = require('querystring');
var fs = require('fs')
var formidable = require('formidable')

function start(response){
  console.log("Request handler 'start' was called.")

  fs.readFile('index.html', function(err, resp){
    console.log("HERE")
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.write(resp.toString())
    response.end();
  });


}
function upload(response, request){
  console.log("Request handler 'upload' was called.")

  var form = new formidable.IncomingForm();
  console.log(' -> about to parse')

  form.parse(request, function(error, fields, files){
    console.log(' ->-> parsing done');

    fs.rename(files.upload.path, '/tmp/test.png', function(error){
      if(error){
        fs.unlink('/tmp/test.png')
        fs.rename(files.upload.path, '/tmp/test.png')
      }
    });
  })


  response.writeHead(200, {
    "content-type": 'text/html'
  });
  response.write('Received image : <br/>');

  response.write("<img src='/show' />")
  response.end();
}

function show(response){
  console.log("Request handler for 'show' callled.")
  fs.readFile('/tmp/test.png', 'binary', function(error, file){
    if(error){
      response.writeHead(500, {'content-type': 'text/plain'})
      response.write(error + "\n");
      response.end();
    }
    else{
      response.writeHead(200, {'content-type': 'image/png'})
      response.write(file, 'binary')
      response.end()
    }
  })
}

exports.start = start;
exports.upload = upload;
exports.show = show;
