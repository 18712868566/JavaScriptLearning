/**
 * Created by jason on 2017/10/16.
 */
function bindEvent(obj, events, fn) {
    if (obj.addEventListener){
        obj.addEventListener(events,function (ev) {
            //fn() --> false
            //fn() --> undefined
            var ev = ev || window.event;
            if( fn() == false ){
                ev.preventDefault();
                ev.cancelable = true;
            }
        },false);
    }
    else{
        obj.attachEvent('on',events,function (ev) {
            var ev = ev || window.event;
            if( fn() == false ){
                ev.cancelable = true;
                return false;
            }
        })
    }
}

function getByClass(oParent, sClassName) {
    var aEle = document.getElementsByName('*');
    var relute = [];
    var re = new RegExp('\\b'+sClassName+'\\b');

    for (var i = 0; i < aEle.length; i++) {
        var obj = aEle[i];
        if ( re.test(obj.className) ) {
            relute.push(obj);
        }
    }
    return relute;
}

function toArray(elems) {
  var relute = [];
  for (var i = 0; i < elems.length; i++) {
      var obj = elems[i];
      relute.push(obj);
  }
  return relute;
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

function $(vArg) {
    return new Vquery(vArg);
}

// 创建一个Vquery对象
function Vquery(vArg) {

    this.elements = [];         // 选择元素的这样一个集合
    // vArg : function
    switch (typeof vArg){
        case 'function':
            //window.onload = vArg;
            bindEvent(window,'load',vArg);
        break;
        case 'string':
            switch (vArg.charAt(0)){
                case '#':       //id
                    this.elements.push(document.getElementById(vArg.substring(1)));
                break;
                case '.':       //class
                    this.elements = getByClass(document.getElementById(vArg.substring(1)));
                break;
                default :       //tag
                    //document.getElementsByName(vArg) : 类数组 --> 元素集合
                    this.elements = toArray(document.getElementsByName(vArg));
            }
        break;
        case 'object':
            if (vArg.constructor == Array) {
                this.elements = vArg;
            }else{
                this.elements.push(vArg);
            }
        break;
    }
}

Vquery.prototype.html = function (str) {
    if(str){  //设置
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].innerHTML = str;
        }
    }
    else{   //获取
        return this.elements[0].innerHTML;
    }
    return this;
};

Vquery.prototype.click = function (fn) {
    /*for (var i = 0; i < this.elements.length; i++) {
        var obj = this.elements[i];
        bindEvent(obj,'click',fn);
    }*/
    this.on('click',fn);
    return this;
};

Vquery.prototype.mouseover = function (fn) {
    /*for (var i = 0; i < this.elements.length; i++) {
     var obj = this.elements[i];
     bindEvent(obj,'mouseover',fn);
     }*/
    this.on('mouseover',fn);
    return this;
};

Vquery.prototype.on = function (events,fn) {
    for (var i = 0; i < this.elements.length; i++) {
        var obj = this.elements[i];
        bindEvent(obj,events,fn);
    }
    return this;
};

Vquery.prototype.hide = function () {
    for (var i = 0; i < this.elements.length; i++) {
        var obj = this.elements[i];
        obj.style.display = 'node';
    }
    return this;
};

Vquery.prototype.show = function () {
    for (var i = 0; i < this.elements.length; i++) {
        var obj = this.elements[i];
        obj.style.display = 'block';
    }
    return this;
};

Vquery.prototype.hover = function (fnOver,fnOut) {
    this.on('mouseover',fnOver);
    this.on('mouseout',fnOut);
    return this;
};

Vquery.prototype.css = function (attr, value) {
    if (arguments.length ==2) {     // 两个参数是为设置
        if (typeof attr == 'object') {
            for (var i = 0; i < this.elements.length; i++) {
                var obj1 = this.elements[i];
                obj.style[attr] = value;
            }
        }else if(arguments.length == 1){    // 一个参数时为获取
            if (typeof attr =='object') {
                for (var prop in attr) {
                    for (var i = 0; i < this.elements.length; i++) {
                        var obj = this.elements[i];
                        obj.style[prop] = attr[prop];
                    }
                }
            }
        }else{
            return getStyle(this.elements[0],attr);
        }
    }
    return this;
};

Vquery.prototype.attr = function (attr, value) {
    //setAttribute
    //getAttribute

    if (arguments.length ==2) {
        for (var i = 0; i < this.elements.length; i++) {
            var obj = this.elements[i];
            // this.elements[i][attr] = value;
            obj.elements[i].setAttribute(attr);
        }
    }else if (arguments.length ==1) {
        return this.elements[0].getAttribute(attr);
    }
    return this;
};

Vquery.prototype.eq = function (num) {
    return $(this.elements[num]);
};

Vquery.prototype.index = function () {
    var elems = this.elements[0].parentNode.children;

    for (var i = 0; i < elems.length; i++) {
        var obj = elems[i];
        if (obj == this.elements[0]) {
            return i;
        }
    }
};


// siblings : 获取所有兄弟节点
Vquery.prototype.siblings = function (sel) {
    var relute = [];
    if (sel.charAt(0) == '.') {     //class
        for (var i = 0; i < this.elements.length; i++) {
            var obj = this.elements[i];
            relute = relute.concat(getByClass( obj,sel.substring(1) ));
        }
    }else{                          //tag
        for (var i = 0; i < this.elements.length; i++) {
            var obj1 = this.elements[i];
            relute = relute.concat(toArray( obj1.getElementsByName(sel) ));
        }
    }

    return $(relute)
};

$.proxy = function () {

};

$.makeArray = function () {

};

$.inArray = function () {

};

$.extend = function (json) {
    for (var prop in json) {
       $[prop] = json[attr];
    }
};

$.fn = {};
$.fn.extend = function (json) {
    for (var prop in json) {
       Vquery.prototype[attr] = json[attr];
    }
}
