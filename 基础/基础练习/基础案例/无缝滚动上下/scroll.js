window.onload = function(){

    var oDiv = document.getElementById('miaovSlide');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var oTime = null;
    var speed = 1;
    var timing = 30;
    var oHeight = null;

    oUl.innerHTML += oUl.innerHTML;
    oTime = setInterval(move,timing);

    function move() {
        if (oUl.offsetTop > -(oLi.length * oLi[0].offsetHeight /2) ) {
            // console.log(oUl.offsetTop)
            // console.log(-(oLi.length * oLi[0].offsetHeight /2))
            oUl.style.top = oUl.offsetTop - speed + 'px';
        }else{
            oUl.style.top = 0 +'px'
        }
    };

}

// E:\0秒味js视频教程\第1部分：《妙味课堂JS基础篇》\0-妙味课堂原创JavaScript视频教程——JS学前预热课程-4 23:24


function miaovSlide(o) {

    var obj = document.getElementById(o);
    if (!obj) return;
    var aDiv = obj.getElementsByTagName('div');
    var oUp = getClass('up');
    var oDown = getClass('down');
    var oWrap = getClass('wrap');
    var oUl = oWrap.getElementsByTagName('ul')[0];
    var oLi = oUl.getElementsByTagName('li');
    var oTime = null;
    var iMs = 30;
    var i = 0;
    var iNum = 5;
    var toggle = -1;

    oUl.innerHTML += oUl.innerHTML;

    oUp.onclick=function(){ toggle=-1; autoPlay(toggle); };
    oDown.onclick=function(){ toggle=1; autoPlay(toggle); };

    oUp.onmouseover = oDown.onmouseover = function(){this.style.filter = 'alpha(opacity:100)'; this.style.opacity = 1; }
    oUp.onmouseout = oDown.onmouseout = function(){this.style.filter = 'alpha(opacity:60)'; this.style.opacity = 0.6;}


    function autoPlay(toggle){
        if (oTime) {clearInterval(oTime)};

        oTime = setInterval(function(){
            iNum += 2*toggle;

            if (iNum > 0) {
                iNum = -oLi.length*oLi[0].offsetHeight / 2;
            }
            if (Math.abs(iNum) > oLi.length*oLi[0].offsetHeight/2) {
                iNum = 0;
            }
            oUl.style.top = iNum + 'px';
        },iMs)
    };
    autoPlay(toggle);


    function getByClass(parent,sClassName) {
        var aEle = parent.getElementsByTagName('*');
        var arr = [];
        for (var i = 0; i < aEle.length; i++) {
            if (aEle[i].className == sClassName) {
                arr.push(aEle[i]);
            }
        }
        return arr;
    };

    function getClass(sName) {
        for (var i = 0; i < aDiv.length; i++) {
            if (aDiv[i].className == sName) {
                return aDiv[i];
            }
        }
    };
}







