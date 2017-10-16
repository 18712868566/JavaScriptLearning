
/*
私有属性和方法

Publice  --- 对象的属性(或)方法可以被所有人访问

Private  --- 只有对象自己可以访问这些属性

Protected  --- 金该对象或者继承这才能访问这些属性
*/


var myapp = myapp || {};

myapp.dom ={};
myapp.dom.Button = function(text,conf){
    var styles = {
        font: 'verdana',
        border: '1px solid black',
        color: 'black',
        background: 'green'
    };
    function setStyles(){
        for(var i in styles){
            b.style[i] = conf[i] || styles[i];
        }
    }
    conf = conf = {};
    var b = document.createElement('input');
    b.type = conf['type'] || 'submit';
    b.value = text;
    setStyles();
    return b;
}

var config = {
    //type: 'text'
};

document.body.appendChild(
    new myapp.dom.Button('hello world',config)
)


/*
    这段代码中,styles 是一个私有属性,
    而 setStyle() 则是一个私有方法.
    他们不能被外部代码,所调用
*/

/*
    特权函数

        例如我们,在上例中,添加一个getDefaults() 方法,
        返回 styles对象,
        这样一来, Button 构造器 之外 的代码 就能访问 到这些样式
        单不能修改他们,这时getDefaults() 就是一个特权函数
*/