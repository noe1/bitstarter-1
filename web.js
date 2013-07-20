var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html";
var content = fs.readFileSync(infile);
var strContent = content.toString();

app.get('/', function(request, response) {
  response.send(strContent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
