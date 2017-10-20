
##<a href="http://www.appinn.com/markdown/" title="Markdown 语法说明(简体中文版">Markdown 语法说明(简体中文版)</a>

> 来源: [关于阿里图标库Iconfont生成图标的三种使用方式（fontclass/unicode/symbol）](http://www.cnblogs.com/Gabriel-Wei/p/6698379.html)

> 阿里iconfont: [附阿里图标库链接](http://www.iconfont.cn/)

> Markdown 语法说明(简体中文版) [点这里](http://www.appinn.com/markdown/)

## IconFont 字体图标的使用


1. 选择喜欢的图标
2. 新建一个项目,保存到项目中
3. 下载代码
4. 复制文件夹到你的实际项目中,根据 web端,ios,Android 具体使用



### web 端使用

> unicode引用

unicode是字体在网页端最原始的应用方式，特点是：
* 兼容性最好，支持ie6+，及所有现代浏览器。
* 支持按字体的方式去动态调整图标大小，颜色等等。
* 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

> font-class引用

font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题。
与unicode使用方式相比，具有如下特点：

* 兼容性良好，支持ie8+，及所有现代浏览器。
* 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
* 因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
* 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

> symbol方法

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以百度，这种用法其实是做了一个svg的集合，与另外两种相比具有如下特点：

* 支持多色图标了，不再受单色限制。
* 通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
* 兼容性较差，支持 ie9+,及现代浏览器。
* 浏览器渲染svg的性能一般，还不如png。




