/*
    自执行函数

    (function(){
        // ...
    })()
*/


var myapp = myapp || {};

myapp.dom = function(){
    function _provate(){
        // ...
        console.log('_provate');
    }

    return {
        getStyle : function(el,prop){
            console.log('getStyle');
            _provate();
        },
        setStyle : function(el,prop,value){
            console.log('setStyle');
        }
    };
}();

myapp.dom.getStyle();