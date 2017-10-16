/**
 *
 * Created by jason on 2017/7/31.
 */

// 传递一个函数
/*function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say,'hello');*/

// 传递一个匿名函数
/*
function execute(someFunction, value) {
    someFunction(value);
}

execute(function (word) {
    console.log(word)
},'hello world');
*/



// 函数传递是如何让HTTP服务器工作的
var http = require('http');
// console.log(http);

/*
http.createServer(function (req, res) {
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.write('Hello world this is text');
    res.end();
}).listen(8888);
*/

function onRequest(req, res) {
    res.writeHeader(200,{"Content-Type":"text/plain"});
    res.write('Hello world this is text Hello world this is text ');
    res.end();
};

http.createServer(onRequest).listen(8888)



































