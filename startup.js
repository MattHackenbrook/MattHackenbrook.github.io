var http = require('http');
var dt = require('./src/carDisplay');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World2!')
}).listen(7060);