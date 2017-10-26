module.exports = function() {

  var express = require('express');
  var app = express();
  var session = require('express-session');
  var OrientoStore = require('connect-oriento')(session);
  var bodyParser = require('body-parser');
  var path = require('path');

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true,
    store: new OrientoStore({
      server: 'host=localhost&port=2424&username=root&password=password123&db=o2'
    })
  }));
  return app;
}
