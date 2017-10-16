/**
 * Created by jason on 2017/7/25.
 */

/*
buf.write(a,b,c,d);

    a : 要写入的字符串
    b : 从Buffer对象中的几位开始写入
    c : 写入的字符串长度
    d : 写入字符串的编码   ---->  utf-8 默认
* */


var str = 'miaov';

console.log( new Buffer(str) );

var bf = new Buffer(5);

// bf.write( str);
// console.log( bf );

bf.write(str,1,3);
console.log( bf );































