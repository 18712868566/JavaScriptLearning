/*
    配置对象

    多个参数的函数或方法
    我们可以用对象来代替多个参数 ----- 让这些参数都成功为某一个对象的属性

    - 不用考虑参数的顺序
    - 可以跳过某些参数的设置
    - 函数的扩展性更强,可以适应将来的扩展需要
    - 代码的可读性更好,因为在代码中我们看到的是 配置对象的属性名称

*/

var myapp = myapp|| {};
myapp.dom = {};
myapp.dom.Button = function(text,conf){
    var b = document.createElement('input');
    b.type = conf.type || 'submit';
    b.font = conf.font || 'Verdana';
    b.color = conf.color || '#000';
    b.border = conf.border || null;
    b.value = text;
    return b;
}


var config = {
    font: 'Arial,Verdana,sans-serif',
    color: 'red',
    type: 'text',
    border: '1px solid red'
};


document.body.appendChild(
    new myapp.dom.Button('dude',{color:'red'})
)

document.body.appendChild(
    new myapp.dom.Button('hello world',config)
)