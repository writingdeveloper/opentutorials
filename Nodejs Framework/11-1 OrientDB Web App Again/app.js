var express =require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var app=express();
var path=require('path');
app.locals.pretty=true;
app.set('views', path.join(__dirname,'views'));   // views 폴더를 사용지정
app.set('view engine', 'pug');  // pug 사용지정
app.use(bodyParser.urlencoded({extended:false}));

// OrientDB 연결부
var OrientDB=require('orientjs');
var server=OrientDB({
  host:'localhost',
  port:2424,
  username:'root',
  password:'password123'   // 상용 소프트웨어에서는 소스코드 내 패스워드 기입하지않음
});
var db=server.use('o2'); // 사용할 DB 설정

// multer 패키지 이용하여 파일 업로드 관련 설정
var multer=require('multer');
var _storage=multer.diskStorage({
  destination:function(req,file,cb){  // 파일 저장 위치 설정
    cb(null, 'uploads/'); // 경로 설정
  },
  filename:function(req,file,cb){
    cb(null,file.originalname); // 파일 저장 이름 설정
  }
});

// 파일 업로드 라우트 설정
var upload=multer({storage:_storage});
app.use('/user', express.static('uploads'));
app.get('/upload', function(req,res){
  res.render('upload');
});
app.post('/upload', upload.single('userfile'), function(req,res){
  console.log(req.file);
  res.send('Uploaded : '+ req.file.filename);
});

// ADD 라우트 설정
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

// EDIT 라우트 설정
app.get('/topic/:id/edit',function(req,res){
  var sql='SELECT FROM topic';
  var id=req.params.id;
  db.query(sql).then(function(topics){
    var sql='SELECT FROM topic WHERE @rid=:rid';
    db.query(sql,{params:{rid:id}}).then(function(topic){
      res.render('edit',{topics:topics, topic:topic[0]});
    });
  });
});

app.post('/topic/:id/edit',function(req,res){
  var sql='UPDATE topic SET title=:t, description=:d, author=:a WHERE @rid=:rid';
  var id=req.params.id;
  var title=req.body.title;
  var desc=req.body.description;
  var author=req.body.author;
  db.query(sql,{
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

// DELETE 라우트 설정
app.get('/topic/:id/delete', function(req,res){
  var sql='SELECT FROM topic';
  var id=req.params.id;
  db.query(sql).then(function(topics){
    var sql = 'SELECT FROM topic WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(topic){
      res.render('delete', {topics:topics, topic:topic[0]});
    });
  });
});


app.post('/topic/:id/delete', function(req,res){
  var sql='DELETE FROM topic WHERE @rid=:rid';
  var id=req.params.id;
  db.query(sql, {params:{
    rid:id}
  }).then(function(topics){
    res.redirect('/topic/');
  });
});

// topic 뷰 라우트 설정
app.get(['/topic', '/topic/:id'], function(req,res){
  var sql='SELECT FROM topic';
  db.query(sql).then(function(topics){
    var id=req.params.id;
    if(id){
      var sql='SELECT FROM topic WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(topic){
        res.render('view', {topics:topics, topic:topic[0]});
      });
    }else{
      res.render('view',{topics:topics});
    }
  })
});

// 서버 구동
app.listen(3000, function(){
  console.log('Connected 3000 Port!');
});
