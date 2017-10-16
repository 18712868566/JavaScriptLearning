/*
	1、新增两个类级别的全局函数，分别
	用于计算两数之和与两数之差，并将结果返回调用的页面中
 */
;(function($){
	$.extend({
		//计算两数之和
		"addNum":function(p1,p2){
		//如果传入的数字不为空，使用传入的数字，否则为0
		p1 = (p1 == undefined) ? 0 : p1;
		p2 = (p2 == undefined) ? 0 : p2;
		var intResult = parseInt(p1) + parseInt(p2);
		return intResult;
		},
		//计算两数之差
		"subNum":function(p1,p2)
		{
			//如果传入的数字不为空，使用传入的数字，否则为0
			var intResult = 0;
			p1 = (p1 == undefined) ? 0 : p1;
			p2 = (p2 == undefined) ? 0 : p2;
			if(p1>p2){
			//如果传入的参数前者大于后者
			var intResult = parseInt(p1) - parseInt(p2);	
			}
			return intResult;
		}
	})
})(jQuery);