var request=require('requeest');
var cheerio=require('cheerio');

var url='https://www.clien.net/service/board/news/11472421?po=0&od=T31&sk=&sv=&category=&groupCd=&articlePeriod=default';

request(url, function(error, response, body){
  if(error) throw error;

  var $=cheerio.load(body);

  var postElements=$('article');
});
