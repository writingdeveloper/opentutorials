var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
  secret: '2983718947@ROFKAMVVAAKDIWY',
  resave: false,
  saveUninitialized: true
}));

app.get('/count', function(req, res) {
  req.session.count=1;
  res.send('hi session');
});

app.get('/tmp', function(req,res){
  res.send('result'+req.session.count):
});

app.listen(3000, function() {
  console.log('Connected 3000 Port!');
});
