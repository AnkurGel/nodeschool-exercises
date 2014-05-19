var fs = require('fs');
function filesFilter(directory, extension, callback){
  extension = new RegExp("\." + extension + "$");
  fs.readdir(directory, function(err, data){
    if(err) return callback(err);
    else{
      var files = data.filter(function(x){
        return x.match(extension);
      });
      return callback(null, files);
    }
  });
}
module.exports = filesFilter;
