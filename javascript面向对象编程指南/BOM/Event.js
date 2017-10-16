//跨浏览器事件监听器
function callback(evt){
    //prep work
    evt = evt || window.event;
    var target = (typeof evt.target !== 'undefined') ? evt.target : evt.srcElement;
    //console.log(target.nodeName);
    alert(target.nodeName)
    stopDefault(evt)
}
function stopBubble(e) {
//如果提供了事件对象，则这是一个非IE浏览器
    if ( e && e.stopPropagation )
    //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
     else
    //否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true;
}
//阻止浏览器的默认行为
function stopDefault( e ) {
    //阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault )
        e.preventDefault();
    //IE中阻止函数器默认动作的方式
    else
        window.event.returnValue = false;
    return false;
}

if (document.addEventListener) {
    document.addEventListener('click',callback,false);
}else if(document.attachEvent){
    document.attachEvent('onclick',callback);
}else{
    document.onclick = callback;
}

/*
* ie 中没有addEventListener()方法,但是他们从ie5开始就提供了一个叫做attachEvent()的等效方法

* 对于单击事件来说,使用 attachEvent() 就等同于使用onclick 属性

* 如果我们使用老式手法来进行事件监听,(例如,通过将某个函数赋值给onclick属性),那么当改回调函数被调用时
  他不会获得相关的事件参数.但只要我们设置了事件监听器,ie中总会有一个全局对象 window.event 会指向该事件

* 在ie的事件对象中,没有用于反应触发事件元素的target属性,但是我们可以使用它的等效属性srcElement

* 正如之前所提到的,ie不支持事件捕捉法,而知使用冒泡法来运作

* ie中没有seopPropagetion()方法,我们可以通过将only-IE cancelBubble 设置为true 来完成相同的操作

* ie中没有preventDefault() 方法,我们可以通过将only-IE属性returnValue设置为false 来完成相同的操作

* 对于事件的取消监听操作,ie中使用的不是removeEventListener()方法,我们要调用的是 detachEvent()方法

*/