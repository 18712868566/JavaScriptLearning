/*
私有函数的公有化


*/

var myapp = myapp || {};
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

myapp.dom.setStyle();
myapp.dom.setStyle = function(){alert('setStyle')};
myapp.dom.setStyle();
myapp.dom.yetAnother();


/*
也就是说:
    myapp.dom.setStyle 指向的是新的方法
    myapp.dom.yetAnother 任然指向 _setStyle()
    _setStyle 方法随时可以被内部代码调用
*/