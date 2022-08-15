var http = require('http');

http.createServer(function(req, res){
    res.write('Aprendendo Node.js ');
    res.end();
}).listen(8080);