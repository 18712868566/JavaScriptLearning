/**
 * Created by jason on 2017/7/24.
 */
/*
* 一个文件就是一个模块
*每个模块都有自己的作用域
*
* 我们使用var 来申明的一个变量.他并不是全局的,而是属于当前模块下
*
* */

/*
var a = 100;
console.log(a);

global.a = 200;
console.log(a);
console.log( global.a )*/


// __filename : 当前文件被解析过后的绝对路径

console.log( __filename )

/*
* 模块加载系统
*
* require('模块') 路径
*   相对路径
* */

// require('./2.js');
/*
模块加载机制
    路径
        绝对路径
* */
// require('E:/0javascript进阶之路/node.js/module/2.js');

//require('2.js');   // 加载node中的核心模块 . 或者是node_modules (在E:nodeJs目录下)

//模块加载优先级
/*
1.首先按照加载的模块文件名进行查找
2.如果没有找到,则会在模块文件名称后加上.js的后缀,进项查找
3.如果没有找到,则会在文件名的后加上.json的后缀.进行查找
4.如果没有找到.则会在文件名称后加上.node的后缀,进行查找
5.如果没有找到,抛出错误
* */

require('./3');


