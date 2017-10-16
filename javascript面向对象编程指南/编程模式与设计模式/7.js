/*
    延迟定义

*/
var myapp = myapp || {};

myapp.myevent = {
    addListener: function(el,type,fn){
        if (typeof window.addEventListener === 'function') {
            myapp.event.addListener = function(el,type,fn){
                el.addEventListener(type,fn,false);
            };
        }else if(typeof document.attachEvent === 'function'){
            myapp.event.addListener = function(el,type,fn){
                el.attachEvent('on'+type,fn)
            };
        }else{
            myapp.event.addListener =function(el,type,fn){
                el['on'+type] = fn;
             };
        }
        myapp.myevent.addListener(el,type,fm);
    }
};



