/**
 * Created by jason on 2017/7/27.
 */

var http = require('http');

http.createServer(function (req, res) {

    // 发送 HTTP 头部
    // HTTP 状态值 200 : ok
    // 内容类型 : text/plain

    res.writeHeader(200,{'Content-Type':'text/plain'});

    //发送相应数据  'hello world'
    res.end('Hello World\n');
}).listen(8888);

//终端打印如下信息
console.log(' server running at http://127.0.0.1:8888 ')