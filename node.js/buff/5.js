/**
 *
 * Created by jason on 2017/7/25.
 *
 * 类方法,静态方法
 */

//isEncoding Buffer 对象支持的字符编码
/*
console.log( Buffer.isEncoding('utf-8') );
console.log( Buffer.isEncoding('gbk') );
console.log( Buffer.isEncoding('hex') );
*/


//isBuffer 检查一个对象是否是Buffer对象
/*
var arr = [1,2,3];
var bf = new Buffer(10);

console.log( Buffer.isBuffer(arr));
console.log( Buffer.isBuffer(bf));
*/


//byteLength 返回字节长度  -----  注意单字节和多字节的区别
/*var str1 = 'lixuefeng';
console.log(str1.length)
console.log(Buffer.byteLength(str1))

var str2 = '李学峰';
console.log(str2.length)
console.log(Buffer.byteLength(str2,'ascii'))
console.log(Buffer.byteLength(str2,'utf-8'))*/

/*
var str1 = 'miaov';
var str2 = '秒味';

var list = [new Buffer(str1), new Buffer(str2)];
console.log(list);

//concat 要拼接的 数据 , 字节数
var bf = Buffer.concat(list,11);
console.log(bf);*/

// 输出指定内容
process.stdout.write('请输入内容 : ');

//开启用户输入监听
process.stdin.resume();

process.stdin.on('data',function (chunk) {
    //输入的内容就是一个Buffer对象
    console.log(chunk);

    //当内容时拼接的时候他会在内部自动调用toString() 方法
    console.log(chunk.toString());
    console.log('你输入的内容是: ' + chunk);

})




































