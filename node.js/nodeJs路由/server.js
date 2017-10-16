/**
 *
 * Created by jason on 2017/7/31.
 */
// 给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径：

var http = require('http');
var url = require("url");


function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + " received.");
        response.writeHeader(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");

}

exports.start = start;

































































