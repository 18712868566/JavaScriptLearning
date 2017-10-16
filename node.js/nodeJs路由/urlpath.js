/**
 *
 * Created by jason on 2017/8/2.
 *
 * 浏览器请求的URL 路径
 *
 */

var http = require('http');
var url = require('url');

function start(route) {

    function onRequest(request, response) {     //请求 / 相应
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + 'received.');

        route(pathname);

        response.writeHeader(200,{'Content-Type':'text/plain'});
        response.write('hello world');
        response.end();
    }

    http.createServer(onRequest).listen(8082);
    console.log('服务器已经启动');
}
exports.start = start;































