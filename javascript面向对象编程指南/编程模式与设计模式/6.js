/*
 初始化分支
*/

var myapp = myapp || {};

myapp.event = {
    addListener : null,
    removeListener : null
}

if (typeof window.addEventListener === 'function') {
    myapp.event.addListener = function(el,type,fn){
        el.addEventListener(type,fn,false);
    };
    myapp.event.removeListener = function(el,type,fn){
        el.removeListener(type,fn,false);
    }
}else if(typeof document.attachEvent === 'function'){
    myapp.event.addListener = function(el,type,fn){
        el.attachEvent('on'+type,fn)
    };
    myapp.event.removeListener = function(el,type,fn){
        el.detachEvent('on'+type,fn);
    }else{
        myapp.event.addListener =function(el,type,fn){
            el['on'+type] = fn;
        };
        myapp.event.removeListener = function(el,type,fn){
            el['on'+type] = null;
        }
    }
};

