var g_bMoveLeft = true;
var g_oTimer = null;
var g_oTimerOut = null;

var g_iSpeed = 3;

window.onload = function(){
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var aA = oDiv.getElementsByTagName('a');

    var i = 0;
    var str = oUl.innerHTML + oUl.innerHTML;
    oUl.innerHTML = str;

    oUl.style.width = aLi.length * aLi[0].offsetWidth + 'px';

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function(){
            // 暂停
            stopMove();
        };

        aLi[i].onmouseout = function(){
            // 开始
            startMove(g_bMoveLeft)
            console.log('a')
        };
    }

    aA[0].onmouseover = function(){
        startMove(true);
    };
    aA[1].onmouseover = function(){
        startMove(false);
    }
    // 加载执行
    startMove(true);
}

// 开始函数
function startMove(bLeft) {
    g_bMoveLeft = bLeft;
    if (g_oTimer) {
        clearInterval(g_oTimer);
    }
    g_oTimer = setInterval(doMove,30);
}

// 暂停函数
function stopMove() {
    clearInterval(g_oTimer);
    g_oTimer = null;
}

function doMove() {
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');

    var l = oUl.offsetLeft;

    if (g_bMoveLeft) {
        l -= g_iSpeed;
        if (l <= -oUl.offsetWidth/2) {
            l += oUl.offsetWidth/2;
        }
    }else{
        l += g_iSpeed;
        if (l > 0) {
            l -= oUl.offsetWidth/2;
        }
    }

    oUl.style.left = l +'px';
}







