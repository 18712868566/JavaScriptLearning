/**
 *
 * Created by jason on 2017/8/2.
 *
 *解压文件
 *
 */

var fs = require('fs');
var zlib = require('zlib');

// 解压 day.txt.gz 文件为 day.txt

fs.createReadStream('day.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('day.txt2'));

console.log('文件解压完成');




































