var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
  res.send("Hello Home Page");
});

app.get('/route',function(req,res){
  res.send('Hello Router')
});

app.get('/login', function(req, res) {
  res.send('<h1>Login Please</h1>');
});

app.get('/test', function(req, res) {
  res.send('<h1>TEST</h1>');
});

app.listen(3002, function() {
  console.log('Connected 3002 Port!');
});
