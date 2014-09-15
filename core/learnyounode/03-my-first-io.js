+var fs = require('fs');
+
+fs.readFileSync('/Users/Dietrich/workbook/core/learnyounode/program1.js', 'utf8', function (err, data) {
+  var numberOfLines = data.split('\n').length - 1;
+  console.log(numberOfLines);
+});
