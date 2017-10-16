/*
 1、功能：设置列表项获取鼠标焦点时的背景颜色
 2、参数：li_col【可选】鼠标所在表项 的 背景颜色
 3、返回：原调用对象
 4、示例： $("ul").focusColor("red");
 5、jquery插件框架如下
 *
 */
;(function($){
	$.fn.extend({
		"focusColor":function(li_col)
		{
			//各种默认属性或参数的设置
			var def_col = "#ccc";  //默认获取焦点的颜色
			var lst_col = "#fff"   //默认失去焦点的颜色
			
			//如果设置的颜色不为空，使用设置的颜色。否则为默认颜色
			li_col = (li_col == undefined) ? def_col : li_col;
			
			//遍历列表项<li>中的全部元素
			$(this).find("li").each(function(){
				$(this).mouseover(function(){ //获取鼠标焦点事件
					$(this).css("background-color",li_col);  //使用设置的颜色
				})
				.mouseout(function(){                      //鼠标焦点移出
					$(this).css("background-color","#fff");  //恢复原来的颜色
				})
			});
			return $(this);   // 返回jQuery对象，保持链式操作
		}
	})
})(jQuery);