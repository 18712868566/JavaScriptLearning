/**
 *
 * Created by jason on 2017/7/26.
 */

var fs = require('fs');

//异步方式 open
/*fs.open('1.txt' , 'r' , function (err, fd) {
    console.log(err);
})

console.log('ok');*/


//同步方式
var fd = fs.openSync('1.txt' , 'r');

console.log(fd);
console.log('ok');
































