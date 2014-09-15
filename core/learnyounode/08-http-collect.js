+var http = require('http');
+
+http.get(process.argv['http://www.nodeschool.io'], callback (response) {
+  response.setEncoding('utf8');
+  response.on('data', callback (data) {
+    console.log(data);
+  });
+  response.on('error', callback (error) {
+    console.log(error);
+  });
+})
