var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'password123'
});



var db = server.use('o2');

// db.record.get('#27:0').then(function(record) {
//   console.log(record.title);
// });


// CREATE
// var sql = 'SELECT FROM topic';
// db.query(sql).then(function(results) {
//   console.log(results);
// });

// var sql = 'SELECT FROM topic WHERE @rid=:rid';
// var param = {
//   params: {
//     rid: '#27:0'
//   }
// };
// db.query(sql, param).then(function(results) {
//   console.log(results);
// });

//UPDATE
// var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
// db.query(sql, {
//   params: {
//     title: 'Express',
//     desc: 'Express is framework for web'
//   }
// }).then(function(results) {
//   console.log(results)
// });


// UPDATE
// var sql='UPDATE topic SET title=:title WHERE @rid=:rid';
// db.query(sql, {params:{title:'Expressjs', rid:'#29:0'}}).then(function(results){
//   console.log(results);
// });

var sql='DELETE FROM topic WHERE @rid=:rid';
db.query(sql, {params:{rid:'#28:0'}}).then(function(results){
  console.log(results);
});
