// Pipe an input read stream to process.stdout
var fs = require('fs');
var filename = process.argv[2];

fs.createReadStream(filename).pipe(process.stdout)

