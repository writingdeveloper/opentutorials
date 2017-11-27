var page = require('webpage').create();
page.open('https://www.clien.net/service/board/news/11473968?po=0&od=T31&sk=&sv=&category=&groupCd=&articlePeriod=default', function (status) {
    if (status) {
        var html = page.content;
        console.log(html);
    };
    phantom.exit();
});
