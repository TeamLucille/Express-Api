'use strict';

var fileUpload = require('./lib/aws-s3-file-upload.js');

var fs = require('fs');
var File = require('./models/file.js');

var done = function() {
  File.db.close();
};

if (process.argv.length < 4) {
  console.log('need caption and file name');
  process.exit(1);
}

var caption = process.argv[2];
var buffer = fs.readFileSync(process.argv[3]);

fileUpload(caption, buffer, function(err, file) {
  setTimeout(done, 0);
  if (err) {
    throw err;
  }
  console.log(file);
});