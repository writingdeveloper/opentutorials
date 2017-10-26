var app = require('./config/express')();

// Connect OrientDB
var OrientDB = require('orientjs');
var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'password123' // Bad Method
});
var db = server.use('o2');


var passport = require('./config/passport')(app);

var auth = require('./routes/auth')(passport);
app.use('/auth', auth);

var topic = require('./routes/topic')();
app.use('/topic', topic);

app.listen(3000, function() {
  console.log('Connected 3000 Port!!');
});
