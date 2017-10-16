 // 获取非行间样式
 function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
};

function startMove(obj, attr, iTarget, fn) {
    // obj = document.getElementsByTagName('div');
    clearInterval(obj.timer);
    //alert(oDiv.offsetWidth)
    obj.timer = setInterval(function(){
        var iCur = 0;

        if (attr == 'opacity') {
            // 透明度
            // parseInt js 中的小数问题
            // 银行 10.58 元 == 1058 分
            // ie8 下测试 闪动
            iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
        }else{
            iCur = parseInt(getStyle(obj, attr));
        }

        // var iCur = parseInt(getStyle(obj, attr));
        // console.log(iCur)
        var iSpeed = (iTarget - iCur)/8;
        iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        // console.log(iSpeed)

        if (iCur == iTarget) {
            clearInterval(obj.timer);

            // document.title = '运动结束';
            // 结束时检测 是否有 fn 参数传递
            if (fn) {
                fn();
            }
        }
        else{
            // obj.style[attr] = iCur + iSpeed + 'px';
            // 打印当前正在执行的 定时器
            // console.log(obj.index)

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:'+ (iCur + iSpeed) +')';
                obj.style.opacity = (iCur + iSpeed) / 100;

                // document.getElementById('text1').value = (iCur + iSpeed);
            }else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
    },30)
}