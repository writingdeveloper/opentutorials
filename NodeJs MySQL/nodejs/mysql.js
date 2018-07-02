var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '43.255.154.68',
  user     : 'sangumee',
  password : 'Sihung84265@',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * from topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();