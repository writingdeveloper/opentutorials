var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var _storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
})

// Connect OrientDB

var OrientDB = require('orientjs');
var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'password123' // Bad Method
});
var db = server.use('o2');


var upload = multer({
  storage: _storage
})
var fs = require('fs');
var app = express();
var path = require('path');
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/user', express.static('uploads'));

app.get('/upload', function(req, res) {
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), function(req, res) {
  console.log(req.file);
  res.send('Uploaded : ' + req.file.filename);
});


app.get('/topic/add', function(req, res) {
  var sql = 'SELECT FROM topic';
  db.query(sql).then(function(topics){
    res.render('add', {topics: topics});
  });
});

app.post('/topic/add', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var author=req.body.author;
  var sql='INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql,{
    params:{
      title:title,
      desc:description,
      author:author
    }
  }).then(function(results){
    res.redirect('/topic/'+encodeURIComponent(results[0]['@rid']));
  });
});

app.get('/topic/:id/edit', function(req, res) {
  var sql = 'SELECT FROM topic';
  var id=req.params.id;
  db.query(sql).then(function(topics){
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(topic){
      res.render('edit', {topics:topics, topic:topic[0]});
    });
  });
});
app.post('/topic/:id/edit', function(req, res){
   var sql = 'UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
   var id = req.params.id;
   var title = req.body.title;
   var desc = req.body.description;
   var author = req.body.author;
   db.query(sql, {
     params:{
       t:title,
       d:desc,
       a:author,
      rid:id
     }
   }).then(function(topics){
     res.redirect('/topic/'+encodeURIComponent(id));
   });
 });

 app.get('/topic/:id/delete', function(req, res) {
   var sql = 'SELECT FROM topic';
   var id=req.params.id;
   db.query(sql).then(function(topics){
     var sql = 'SELECT FROM topic WHERE @rid=:rid';
     db.query(sql, {params:{rid:id}}).then(function(topic){
       res.render('delete', {topics:topics, topic:topic[0]});
     });
   });
 });

 app.post('/topic/:id/delete', function(req, res){
    var sql = 'DELETE FROM topic WHERE @rid=:rid';
    var id = req.params.id;
    db.query(sql, {
      params:{
       rid:id
      }
    }).then(function(topics){
      res.redirect('/topic/');
    });
  });

app.get(['/topic', '/topic/:id'], function(req, res){
   var sql = 'SELECT FROM topic';
   db.query(sql).then(function(topics){
     var id = req.params.id;
     if(id){
       var sql = 'SELECT FROM topic WHERE @rid=:rid';
       db.query(sql, {params:{rid:id}}).then(function(topic){
         res.render('view', {topics:topics, topic:topic[0]});
       });
     } else {
       res.render('view', {topics:topics});
     }
   });

   // Local DataBase Prototype

  // fs.readdir('data', function(err, files) {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Internal Server Error');
  //   }
  //
  //   var id = req.params.id;
  //   if (id) {
  //     // id 값이 있을 때
  //     fs.readFile('data/' + id, 'utf-8', function(err, data) {
  //       if (err) {
  //         console.log(err);
  //         res.status(500).send('Internal Server Error');
  //       }
  //       res.render('view', {
  //         topics: files,
  //         title: id,
  //         description: data
  //       });
  //     });
  //
  //   } else {
  //     // id 값이 없을 때
  //     res.render('view', {
  //       topics: files,
  //       title: 'Welcome',
  //       description: 'Hello JavaScript For Server'
  //     });
  //   }
  // })
});

app.get('/topic/:id', function(req, res) {
  var id = req.params.id;

  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }

    fs.readFile('data/' + id, 'utf-8', function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      res.render('view', {
        topics: files,
        title: id,
        description: data
      });
    });
  })
});



app.listen(3000, function() {
  console.log('Connected 3000 Port!!');
});
