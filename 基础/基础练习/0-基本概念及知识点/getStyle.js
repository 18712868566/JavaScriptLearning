// currentStyle : 获取计算后的样式（当前样式、最终样式） -> 好用的东西都不兼容 -> 兼容IE -> 但是不兼容 Firefox
// FF : getComputedStyle()
//哪个元素
//哪个样式

function getStyle(obj,attr){
    if(obj.currentStyle){
        // IE
        return obj.currentStyle[attr];
    }
    else{
        // FF
        return getComputedStyle(obj,false)[attr];
    }
}