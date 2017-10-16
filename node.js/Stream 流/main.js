/**
 *
 * Created by jason on 2017/8/2.
 *
 * 操作管道流实例
 */


var  fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('day.txt');

// 管道读写操作
// 读取 input.txt文件内容,并将内容写到 day.txt 文件中
readerStream.pipe(writerStream);

console.log('end');













































