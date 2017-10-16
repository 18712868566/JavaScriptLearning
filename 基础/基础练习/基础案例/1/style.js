window.onload = function(){
    var oMessage = document.getElementById('message');
    var aDiv = oMessage.getElementsByTagName('div');
    var aUserInfo = [];
    var aImg = [];
    var aTimer = [];
    var i = 0;

    for (var i = 0; i < aDiv.length; i++)
    {
        switch(aDiv[i].className)
        {
            case 'user_info':
                  aUserInfo.push(aDiv[i]);
                  break;
            case 'photo_content':
                  aImg.push(aDiv[i].getElementsByTagName('img')[0]);
                  break;
        }
    }

    for (var i = 0; i < aImg.length; i++) {
        aImg[i].miaovIndex = i;
        aImg[i].onmouseover = function()
        {
            if (aTimer[this.miaovIndex])
            {
                clearTimeout(aTimer[this.miaovIndex]);
            }
            aUserInfo[this.miaovIndex].style.display = 'block';
        };

        aUserInfo[i].miaovIndex = i;
        aUserInfo[i].onmouseover = function(){
            if (aTimer[this.miaovIndex]) {
                clearTimeout(aTimer[this.miaovIndex]);
            }
            aUserInfo[this.miaovIndex].style.display = 'block';
        };

        aUserInfo[i].onmouseout = function(){
            var index = this.miaovIndex;
            aTimer[this.miaovIndex] = setTimeout(function(){
                aUserInfo[index].style.display = 'none';
                aTimer[index] = null;
            },10);
        };

        aTimer[i] = null;
    }



}
