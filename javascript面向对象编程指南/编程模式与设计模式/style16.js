
//链式调用
var myapp = myapp || {};

myapp.dom ={};
myapp.dom = (function(){
    var _setStyle = function(el,prop,value){
        console.log('setStyle');
    };
    var _getStyle = function(el,prop){
        console.log('getStyle');
    }

    return {
        setStyle : _setStyle,
        getStyle : _getStyle,
        yetAnother : _setStyle
    };
})()
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

var obj = new myapp.dom.Element('span');
obj.setStyle('color','red').setStyle('font','Verdana');
document.body.appendChild(obj)
//pages271







