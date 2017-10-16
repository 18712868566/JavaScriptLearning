/*
    配置对象

    多个参数的函数或方法
    我们可以用对象来代替多个参数 ----- 让这些参数都成功为某一个对象的属性

    - 不用考虑参数的顺序
    - 可以跳过某些参数的设置
    - 函数的扩展性更强,可以适应将来的扩展需要
    - 代码的可读性更好,因为在代码中我们看到的是 配置对象的属性名称

*/

/*
var myapp = {};
myapp.dom = {};

myapp.dom.Buttom = function(text,type){
    var b = document.createElement('input');
    b.type = type || 'submit';
    b.value = text;
    return b;
}

document.body.appendChild(new myapp.dom.Buttom('请输入...','text'));
document.body.appendChild(new myapp.dom.Buttom('puuush','submit'));
*/

/*
    多个参数时
    myapp.dom.Button = function(text,type,color,border,font){
        //...
    }

    当我们只想设置第三个和第五个参数时,跳过第二个和第四个时
    new myapp.dom.Button('hello',null,'red',null,'Arial,Verdana');

*/


