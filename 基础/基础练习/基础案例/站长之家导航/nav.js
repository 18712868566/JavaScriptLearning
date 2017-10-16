window.onload = function(){
    var oDiv = document.getElementById('nav');
    var aLi = oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var aA = [];
    var aSpan = [];
    var oTimer = null;

    for (var i = 0; i < aLi.length; i++) {
        aA.push(aLi[i].getElementsByTagName('a')[0]);
        aSpan.push(aLi[i].getElementsByTagName('span')[1]);
    }

    for (var i = 0; i < aLi.length; i++) {
        aA[i]._index = i;
        aA[i].onmouseover = function(){
            if (oTimer) {
                clearTimeout(oTimer);
                oTimer = null;
            }
            for (var i = 0; i < aLi.length; i++) {
                aA[i].className = 'normal';
                aSpan[i].style.display = 'none';
            }
            aA[this._index].className = 'active';
            aSpan[this._index].style.display = 'block';
        };

        aA[i].onmouseout = function(){
            var index = this._index;
            oTimer = setTimeout(function(){
                aSpan[index].style.display = 'none';
                oTimer = null;
            },1000)
        };

        aSpan[i].miaovIndex = i;
        aSpan[i].onmouseover = function(){
            if (oTimer) {
                clearTimeout(oTimer);
                oTimer = null;
            }
        };

        aSpan[i].onmouseout = function(){
            var index = this.miaovIndex;
            oTimer = setTimeout(function(){
                aSpan[index].style.display = 'none';
                oTimer = null;
            },1000)
        };
    }

}