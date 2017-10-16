// currentStyle : 获取计算后的样式（当前样式、最终样式） -> 好用的东西都不兼容 -> 兼容IE -> 但是不兼容 Firefox
// FF : getComputedStyle()
// 哪个元素
// 哪个样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        // IE
        return obj.currentStyle.attr;
    }
    else{
        // FF
        return getComputedStyle(obj,false)[attr];
    }
}

// 优点能取到 元素的默认样式 比如说默认字体大小 (fontSize)
// 引入 :  基础样式(单一样式) -> widht height
//         复合样式 -> background
                            // background-color
                            // background-border
                            // background-position
// getStyle 只能设置和获取 元素的 基础样式 --> 比如
                                                // getStyle(obj,'backgroundColor'); --> 可以
                                                // getStyle(obj,'background');      --> 不可以