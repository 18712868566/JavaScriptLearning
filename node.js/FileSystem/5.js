/**
 *
 * Created by jason on 2017/7/26.
 */

var fs = require('fs');

var filename = '2.txt';

/*
* 向一个指定的文件中写入数据,如果该文件不存在,则新建,如果存在, 则新的内容会覆盖原有的文件内容
* fs.wroteFile(filename,data,[options],callback)
*       filename : 要操作的文件名,如果存在改写里边的内容,如果不存在,自动创建
*       data : 写入的数据
*       options :
*       callback : 回调函数
*              err : null 错误信息
* */
/*fs.writeFile( filename, '20170726', function () {
    console.log(arguments);

    /!*
    * arguments
    *       err : null 错误信息
    * *!/
})*/


// 插入指定数据到文件的尾部,如果没有则自动创建
var filename2 = '3.txt';
fs.appendFile( filename, '今天学习了nodeJs 的知识.',function () {
    console.log(arguments);
    console.log('数据写入完毕!');
})






































