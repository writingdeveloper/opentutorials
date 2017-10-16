var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.listen(3000, function() {
  console.log('Connected 3000 Port!');
});
