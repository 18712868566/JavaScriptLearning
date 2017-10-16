/**
 *
 * Created by jason on 2017/8/2.
 *
 * 全局对象与全局变量
 *
 *      setTimeout(cb, ms)
 *      clearTimeout(t)
 *      setInterval(cb, ms)
 *      clearInterval(t)
 *      console         //控制台
 *      process         //过程，进行；方法，步骤；作用；程序；推移
 *              {
 *                  exit :
 *                  beforeExit :
 *                  uncaughtException :
 *                  Signal事件 :
 *              }
 *
 *
 */

// console.log(global)



console.log(__filename)
console.log( __dirname )

// console.log(console)
console.info('程序开始执行: ');

var counter = 10;
console.log('计数: %d',counter);

console.time('获取数据');

/*
*   执行一些代码
* */

console.timeEnd('获取数据');

console.info('程序执行完毕');



















