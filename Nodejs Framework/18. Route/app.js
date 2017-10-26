var express=require('express');
var app=express();

var router=express.Router();
router.get('/r1',function(req,ree){
  res.send('Hello /p1/r1');
});
router.get('/r2', function(req,res){
  res.send('Hello /p1/p2');
});
app.use('/p1', router);


app.get('/p1/r1', function(req,res){
  res.send('Hello /p1/r1');
});

app.get('/p1/r2', function(req,res){
  res.send('Hello /p1/r2');
});

app.get('/p2/r1', function(req,res){
  res.send('Hello /p2/r1');
});

app.get('/p2/r2', function(req,res){
  res.send('Hello /p2/r2');
});



app.listen(3000, function(){
  console.log('connected');
});
