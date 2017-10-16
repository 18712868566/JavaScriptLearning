/**
 * Created by jason on 2017/7/25.
 */
/*
process : 他是一个全局对象
* */

//console.log( process );
//console.log( global.process )


//console.log( process.argv )


//dos 命令

/*
* e:  进入指定目录
*
* cd 0javascript进阶之路\node.js\process ---- 执行文件的路径
*
* cls 清屏
*
* node x.js     ----                          执行某个node.js程序
*
* */

// console.log( process.env )
// console.log( process.pid )
// console.log( process.title )
//console.log( process.arch )

/*
*   IO 的概念
*
*       标准的输入输出流
*           stdin           ---     输入操作
*           sedout          ---     输出操作
*
* */

//默认情况下,输入流是关闭的,要监听处理输入流数据,首先要开启输入流
process.stdin.resume();


//用于监听用户输入的数据
/*process.stdin.on('data',function (chunk) {
    console.log('用户输入了: ' + chunk )
})*/


var a;
var b;

process.stdout.write('请输入a的值: ');

process.stdin.on('data',function (chunk) {

    if ( !a ){   //如果a值不存在的话
        a = Number(chunk);
        process.stdout.write('请输入b的值: ');
    }else{
        b = Number(chunk);

        process.stdout.write( '结果是 : '+ (a + b) )
    }
})













