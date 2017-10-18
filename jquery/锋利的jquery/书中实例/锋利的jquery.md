1.解决jquery和其他库的冲突

>   **jquery在其他库之后引入**

   * 将变量$的控制权移交给 prototype.js ( 其他库中使用 $ )
   ```
   jquery.noConflict();
   ```

   * 或者自定义一个快捷方式
   ```
   var jq = jquery.noConflict();

   jq(function(){
       //....
   })
   ```
   * 不想给jquery自定义备用名称,还想使用$而不管其他库的$()方法,同时又不想与其他库冲突

   ```
   // 第一种
   jquery.noConflict();
   jqeury(function($){
       // 在函数内部继续使用$()方法
       //....
   })

   // 第二种
   jquery.noConflict();
   (function($){
       $(function(){
           // 在函数内部继续使用$()方法
           //....
       })
   })(jQuery)
   ```
>   **jquery在其他库之前引入**

    **"jQuery" 来做一些jQuery的工作.同时,也可以使用 $()方法作为其他哭的快捷方式.**

    ```
    jQuery(funtion(){       // 直接使用jQuery, 无需调用 'jQuery.noConflict()'函数
        //....
    })

    $('pp').style.display = 'none';     // 使用 prototype.js
    ```

2. jquery 选择器

>   **之前不常用,但是有用的选择器**

    * 基本过滤选择器 
        :gt(index) : 选取索引大于index的元素     index从0开始
        :lt(index) : 选取索引小于index的元素     index从0开始

    * 内容过滤选择器
        :contains(text) : 选取含有文本内容为 'text'的元素
        :empty : 选取不包含子元素或文本的空元素
        :has(selector) : 选择含有选择器所匹配的元素的元素
        :parent : 选取含有子元素或者文本的元素

>   **jquery 事件**

    * 阻止冒泡
        e.stopPropagation()
    * 阻止默认事件
        e.preventDefault()
    * 既阻止冒泡有阻止默认事件
        return false

    * jquery 不支持事件捕获 --->  请使用原生javascript

    ** 事件对象的属性 **

    函数中的参数 e 就是事件对象, 存储这事件触发的一些细节
    ```
    ('div').click(function(event){
        // event.stopPropagation()          // 阻止事件冒泡  
        // event.preventDefault()           // 阻止默认事件
        // event.type()                     // 获取事件类型
        // event.target()                   // 获取到触发事件的元素
        // event.relatedTarget()            // ie 兼容处理
        // event.pageX()                    // 获取光标相对于页面的x坐标和y坐标
        // event.pageY()
        // event.which()                    // 获取键盘事件的按键或者在鼠标单击事件的 左 中 右 键
        // event.metaKey()                  // 键盘事件中获取 <crtl>按键
        // event.originalEvent()            // 指向原始的事件对象
        //....
    })
    ```

    **模拟操作**

    trigger();  模拟click事件   自动执行
    ```
    $('#btn').trigger('click');

    // 触发自定义事件
    $('#btn').bind('myclick',function(){
        $('#test').append('<p>我是自定义事件.</p>');
    })

    $('#btn').trigger('myclick');

    ```
    传递数据

    执行默认操作
    ```
    // 页面加载后 input 自动获得焦点
    $('input').trigger('focus');
    ```    

