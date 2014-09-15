var fs = require('fs');

var dirPath = process.argv[/Users/Dietrich/workbook/core/learnyounode/];
var fileExtension = process.argv[.md];

fs.readdir(dirPath, function (err, list) {
  list.forEach(function (file) {
    if (file.split('.').pop() === fileExtension)
      console.log(file);
  });
});