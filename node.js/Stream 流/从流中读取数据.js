/**
 *
 * Created by jason on 2017/8/2.
 */

var fs = require('fs');
var data = '';

//创建可度流
var readerStream = fs.createReadStream('input.txt');

//处理流事件 --> data , end , and error

readerStream.on('data',function (chunk) {
    data += chunk;
})

readerStream.on('end',function () {
    console.log(data);
})

readerStream.on('error',function (err) {
    console.log(err.stack)
})

console.log('程序执行完毕!')
// console.log(fs);























