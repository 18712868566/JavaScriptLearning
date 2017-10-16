/*命名空间中的构造器应用

*/

var myapp = myapp || {};

myapp.dom ={};

//创建元素节点
myapp.dom.Element = function(type,prop){
    var tmp = document.createElement(type);
    for(var i in prop){
        tmp.setAttribute(i,prop[i]);
    }
    return tmp;
}
//创建文本节点
myapp.dom.Text = function(txt){
    return document.createTextNode(txt);
}

var el1 = new myapp.dom.Element('a',{href:'http://www.baidu.com',class:'btn'});
var el2 = new myapp.dom.Text('click me');

el1.appendChild(el2);
document.body.appendChild(el1);