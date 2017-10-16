/**
 *
 * Created by jason on 2017/7/27.
 *
 * 所有的对象都被当作 true。
 * 当且仅当字符串为空时，该字符串被当作 false。
 * null 和 undefined 被当作 false。
 * 当且仅当数字为零时，该数字被当作 false。
 */

var fs = require('fs');

// 读取文件成功或失败
/*fs.readFile('4.txt',function (err, data) {
    console.log(arguments);
    console.log(err);
    console.log( typeof err );

    //console.log(arguments[1].toString());
    if( err ){
        console.log( '文件读取失败!' );
    }else{
        console.log( data.toString() );
    }
})*/


/*fs.readFile('5.txt',function (err, data) {
    console.log(arguments);
    console.log(err);
    console.log( typeof err );

    //console.log(arguments[1].toString());
    if( err ){
        console.log( '文件读取失败!' );
    }else{
        console.log( data.toString() );
    }
})*/


//删除文件
/*fs.unlink('dle.txt',function (err) {
    if (err){
        console.log('删除失败!');
    }else{
        console.log('删除成功!');
    }
});*/


//重命名
/*fs.rename('dle.txt','dle.new.txt',function (err) {
    console.log(arguments);
    if (err){
        console.log('重命名失败.');
    }else{
        console.log('重命名成功!');
    }
})*/


//查看文件的信息

/*
fs.stat('dle.new.txt',function () {
    console.log(arguments);
})
*/













































