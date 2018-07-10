var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var service_key = 'zpIsbBaqMwp8mr7Qcc%2BJlzlBJb41v6vdpZaICOpCkn%2BtYeumWZUQxAHjGB7XEYRRcroVZnEOsSTHBCKVGUJmsA%3D%3D';

  var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList';
  var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + service_key; // Service Key

  request({
    url: url + queryParams,
    method : 'GET'
  }, function(error, response, body){
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Response Received', body);
  });

  res.render('index', {title : 'Express'});
});

router.get('/login', function(req,res, next){
  res.render('login', {title: 'Login'});;
});

module.exports = router;
