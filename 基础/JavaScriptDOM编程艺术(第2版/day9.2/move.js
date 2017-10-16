function moveElement(elementID,final_x,final_y,interval){
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);

    // 我们变量 movement 从一个全局变量改变为正在被移动的那个元素 elem 元素的属性
    if(elem.movement){
        clearTimeout(elem.movement);
    }


    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) { xpos++; }
    if (xpos > final_x) { xpos--; }
    if (ypos < final_y) { ypos++; }
    if (ypos > final_y) { ypos--; }

    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    // var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")"
    var repeat = 'moveElement("'+elementID+'",'+final_x+','+final_y+','+interval+')'
    // 这里改为
    // movement = setTimeout(repeat,interval)
    elem.movement = setTimeout(repeat,interval)
    // 全局变量 也不能同 var 声明 page 210 写成属性的形式 创建一个属性

    //console.log('end')
    // movement = setTimeout("moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")",interval)
}

function addLoadEvent(func) {
        if ( typeof window.onload != 'function' ) {
            window.onload = func;
        }else{
            window.onload = function(){
                oldonload();
                func();
            }
        }
    }
