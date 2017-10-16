 // 获取非行间样式
 function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
};

function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var bStop = true;       // 假设所有值都到达终点
        for (attr in json){
                //1.取当前的值
                var iCur = 0;
                if (attr == 'opacity') {
                    // 透明度
                    // parseInt js 中的小数问题
                    // ie8 下测试 闪动
                    iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
                }else{
                    iCur = parseInt(getStyle(obj, attr));
                    console.log(iCur)
                }
                //2.算速度
                var iSpeed = (json[attr] - iCur)/8;
                iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

                //3.检测停止
                if (iCur != json[attr]) {
                    bStop = false;
                }
                // 打印当前正在执行的 定时器
                // console.log(obj.index)
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:'+ (iCur + iSpeed) +')';
                    obj.style.opacity = (iCur + iSpeed) / 100;
                }else{
                    // 只能处理数值,类型的属性
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
        }

        if (bStop) {
            clearInterval(obj.timer);
            // 结束时检测 是否有 fn 参数传递
            if (fn) {
                fn();
            }
        }
    },30)
}