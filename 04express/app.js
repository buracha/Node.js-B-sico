var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.write('Utilizando o Express');
    res.end();
})

app.listen(8080);
