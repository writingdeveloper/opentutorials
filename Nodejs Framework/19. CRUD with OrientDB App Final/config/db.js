module.exports = function() {
  var OrientDB = require('orientjs');
  var server = OrientDB({
    host: 'sangumserver.iptime.org',
    port: 2424,
    username: 'root',
    password: 'password123'
  });
  var db = server.use('crudOriginal');
  return db;
}
