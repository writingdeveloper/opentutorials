var mysql = require('mysql');
var db = mysql.createConnection({
    host: '43.255.154.68',
    user: 'sangumee',
    password: 'Sihung84265@',
    database: 'opentutorials'
  });
  db.connect();

  module.exports = db;