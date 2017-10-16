/**
 *
 * Created by jason on 2017/8/3.
 *
 * process 全局变量的
 *          事件 & 描述
 *          退出状态码
 *          属性 & 描述
 *          方法
 *
 *          http://www.runoob.com/nodejs/nodejs-global-object.html
 */

/*
process.on('exit',function (code) {

    // 以下代码永远不会执行
    setTimeout(function () {
        console.log('改代码不会执行');
    },0);

    console.log( '退出码为: ', code );

});

console.log('over');
*/

// console.log(process);

// console.log(process.argv)

/*
// 输出到终端
process.stdout.write('hello world' + '\n');
// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
})
// 获取执行路径
console.log(process.execPath);
// 平台信息
console.log(process.platform);
*/

console.log( '当前目录 :' + process.cwd() );

console.log( '当前版本 :' + process.version);

console.log( '内存使用情况 :' + process.memoryUsage());

// 遍历一个对象,并查看他的每个属性
var obj = process.memoryUsage();

var temp = '';
for(var i in obj){
    temp += i + ':' + obj[i] + '\n';
}
console.log(temp);




























