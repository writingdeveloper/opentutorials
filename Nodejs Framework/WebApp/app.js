var express = require('express');
var bodyParser = require('body-parser');
var fs=require('fs');
var app = express();
var path = require('path');
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/topic/new', function(req, res) {
  res.render('new');
});

app.get('/topic',function(req,res){
  fs.readdir('data', function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
      res.render('view', {topics:files});
  })
});

app.post('/topic', function(req, res) {
  var title=req.body.title;
  var description=req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){//If Error Exists
      res.status(500).send('Internal Server Error');
    }
    //If Error Not Exists
      res.send('Success!');
  });
});

app.listen(3000, function() {
  console.log('Connected 3000 Port!!');
});
