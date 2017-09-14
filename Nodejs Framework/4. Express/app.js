var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send("Hello Home Page");
});

app.get('/login', function(req,res){
  res.send('<h1>Login Please</h1>');
});

app.listen(3001, function() {
  console.log('Connected 3001 Port!');
});
