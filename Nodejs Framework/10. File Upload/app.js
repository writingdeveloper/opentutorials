var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})


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
  res.send('Uploaded : '+req.file.filename);
});


app.get('/topic/new', function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {
      topics: files
    });
  });

});

app.get(['/topic', '/topic/:id'], function(req, res) {
  fs.readdir('data', function(err, files) {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }

    var id = req.params.id;
    if (id) {
      // id 값이 있을 때
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

    } else {
      // id 값이 없을 때
      res.render('view', {
        topics: files,
        title: 'Welcome',
        description: 'Hello JavaScript For Server'
      });
    }
  })
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

app.post('/topic', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/' + title, description, function(err) {
    if (err) { //If Error Exists
      res.status(500).send('Internal Server Error');
    }
    res.redirect('/topic/' + title);
  });
});

app.listen(3000, function() {
  console.log('Connected 3000 Port!!');
});
