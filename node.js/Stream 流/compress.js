/**
 *
 * Created by jason on 2017/8/2.
 *
 * 链式流
 *      利用管道流和链式来压缩和解压文件
 *
 *
 */


var fs = require('fs');
var zlib = require('zlib');

// 压缩 day.txt 文件为day.txt.gz
fs.createReadStream('day.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('day.txt.gz'));

console.log('文件压缩完成.');











































