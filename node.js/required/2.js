/**
 * Created by jason on 2017/7/27.
 */

var fs = require('fs');

// 同步读取文件内容  阻塞模式
/*
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log(data);
*/


//异步读取文件内容, 非阻塞模式
fs.readFile('input.txt',function (err, data) {
    if(err) return console.error(err);
    console.log(data.toString());
})

console.log('程序执行结束!');