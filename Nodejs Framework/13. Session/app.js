var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
  secret: '2983718947@ROFKAMVVAAKDIWY',
  resave: false,
  saveUninitialized: true
}));

app.get('/count', function(req, res) {
  res.send('hi session');
});

app.listen(3000, function() {
  console.log('Connected 3000 Port!');
});
