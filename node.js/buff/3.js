/**
 * Created by jason on 2017/7/25.
 */

var bf = new Buffer('miaov');
console.log( bf.toString() )
console.log( bf.toString('utf-8',1,3) )

//一个中文字符,等于是三个字节
var bf2 = new Buffer('李学峰');
console.log(bf2);
console.log(bf2.toString('utf-8',1));           //这样截取的话,会产生乱码

console.log(bf.toJSON());















