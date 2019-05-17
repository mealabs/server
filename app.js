var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(8000);