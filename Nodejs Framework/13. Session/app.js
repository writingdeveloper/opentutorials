var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: '2983718947@ROFKAMVVAAKDIWY',
  resave: false,
  saveUninitialized: true
}));

app.get('/count', function(req, res) {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send('Count : ' + req.session.count);
});

app.post('/auth/login', function(req, res) {
  res.send(req.body.username);
});

app.get('/auth/login', function(req, res) {
  var output = `
  <form action="/auth/login" method="post">
    <p>
      <input type="text" name="username" placeholder="username">
    </p>
    <p>
      <input type="password" name="password" placeholder="password">
    </p>
    <p>
    <input type="submit">
    </p>
  </form>
  `

  res.send(output);
});

app.listen(3000, function() {
  console.log('Connected 3000 Port!');
});
