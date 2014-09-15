@@ -1,6 +1,6 @@
 var fs = require('fs');
 
-var fileBuffer = fs.readFileSync(process.argv['/Users/Dietrich/workbook/core/learnyounode/program1.js'], 'utf8');
-var numberOfLines = fileBuffer.split('\n').length - 1;
+var fileContents = fs.readFileSync(process.argv['/Users/Dietrich/workbook/core/learnyounode/program1.js'], 'utf8');
+var numberOfLines = fileContents.split('\n').length - 1;
 
 console.log(numberOfLines);


