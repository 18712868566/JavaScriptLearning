/*global namespace
  减少命名冲突,将对象用作命名空间
*/

var myapp = myapp || {};

myapp.event = {};

myapp.event = {
    addListener:function(el,type,fn){
        //.. do the thing
    },
    removeListener:function(el,type,fn){
        // ..
    },
    getEvent: function(e){
        //...
    }
}