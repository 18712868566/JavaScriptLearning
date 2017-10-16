var EventUtil = {
        // 添加侦听事件
        addEventListener:function (element, type, handler) {
            // IE9+、Firefox、Safari、chrome和Opera
            if(element.addEventListener) {
                element.addEventListener(type, handler, false);
            }
            // IE8-
            else if(element.attachEvent) {
                element.attachEvent("on" + type, handler);
            }
        },

        // 移除侦听事件
        removeEventListener:function (element, type, handler) {
            // IE9+、Firefox、Safari、chrome和Opera
            if(element.addEventListener) {
                element.removeEventListener(type, handler, false);
            }
            // IE8-
            else if(element.attachEvent) {
                element.detachEvent("on" + type, handler);
            }
        },

        // 获取事件对象
        getEvent:function(event) {
            if(typeof event == "undefined") {
                event = window.event; // IE浏览器
            }
            return event;
        },

        // 获取触发事件的元素
        getTarget:function(event){
            if(typeof event.srcElement == "undefined") {
                return event.target;
            }else {
                return event.srcElement; // IE浏览器
            }
        },

        // 获取事件类型
        getType:function(event) {
            return event.type;
        },

        // 获取按键键码
        getCharCode:function(event) {
            if(typeof event.keyCode == "number") {
                return event.keyCode; // IE8-、Firefox和opera
            }else {
                return event.charCode;
            }
        },

        // 获取鼠标相对于文档的位置,即页面坐标位置
        getPagePosition:function(event) {
            var pageX = event.pageX,
                pageY = event.pageY;
            if(pageX == undefined) {
                pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
            }
            if(pageY == undefined) {
                pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
            }
            return {
                pageX:pageX,
                pageY:pageY
            };
        },

        // 阻止事件的默认行为
        preventDefault:function(event) {
            if(event.preventDefault){
                event.preventDefault();
            }else {
                event.returnValue = false; // IE浏览器
            }
        },

        // 阻止事件冒泡
        stopPropagation:function(event) {
            if(typeof event.cancelBubble == "undefined") {
                event.stopPropagation();
            }else {
                event.cancelBubble = true; // IE浏览器
            }
        }
    };

/*
    调用

    HTML部分

    <div id="box" style="color:red;width: 100%;height:200px;" >
         <input type="button" value="点击" id="btn" />
    </div>
    <a href="http://www.test.com" id="a">test</a>


    js部分

    var box = document.querySelector("#box");
    box.onclick = function(event) {
        event = EventUtil.getEvent(event);
        alert(EventUtil.getType(event));
        alert(EventUtil.getTarget(event));
    };
    var input = document.querySelector("input");
    input.onclick = function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.stopPropagation(event);
    };

    var a = document.getElementById("a");
    a.onclick = function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
    };
*/