/**
 * Created by jason on 2017/7/24.
 */

/*
* 在一个模块中通过var定义的变量.起作用域范围是当前模块,外部不能够直接的访问
* 如果我们想一个模块能过访问另外一个模块中定义的变量,可以:
*   1.把变量作为global对象的一个属性,但是这样的做法是不推荐使用的
*   2.使用模块对象 module
* */

//var a = 100;

//global.a = 100;  //不推荐


/*
module : 保存提供和当前模块有关的一些信息

在这个module对象.有一个子对象 : exports 对象
我们可以通过这个对象把一个模块中的局部变量对象进行提供访问
* */


var a = 200;
module.exports.a = a;


/*
* 在模块作用域,还有一个内置的模块对象 exports  并且 他其实就是 module.exportss
* */
/*
console.log( module.exports === exports );      // true

var b = 300;
exports.b = b;*/

//尽量不要坡缓 他们之间的引用关系 例如:

//module.exports = [1,2,3]  //exports 和 mudule.exports 的指向关系已经断开了
//exports.a = 400;

//exports = [2,3,4]   //同理 {} 也不会反应到 module.exports 对象上

// console.log(module);





















