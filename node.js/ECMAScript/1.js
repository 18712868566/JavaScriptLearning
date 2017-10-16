
/**
 * Created by jason on 2017/7/24.
 *
 * 在ECMAScript部分node.js和js其实是一样的比如数据类型的定义,语法结构,内置对象
 *
 *在js中的顶层对象
 *  window
 *
 *在node中的顶层对象
 *  global   在node中也没有什么window
 *
 *
 *
 */




/*
 var a = 100;
 console.log(a);*/

/*
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth() + 1);


var arr = [1,2,3];
arr.push(4);
console.log(arr);
*/

/*
function Person(name) {
    this.name = name;
}
Person.prototype.run = function () {
    console.log(this.name + ' running');
}

var p1 = new Person('lixuefeng');
p1.run();*/

/*var a =100;
console.log(window.a);*/

var b = 200;
console.log(global.b);      //undefined









