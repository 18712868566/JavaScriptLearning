/*
 *  gobal全局样式
 *  创意源于生活，代码如诗从你我开始
 *  OOCSS虽好，需培养，需规范，需慢慢品尝
 ********************************************************************************************
 */

/*
 //---在学习javascript的过程中，整理的js封装库文件。以后用时，直接掉用即可。
 
 //---2016/1/22开始整理************************************************************************
*/
/*
function getByClass(oParent, sClass) {

	var aResult = []; //声明一个数组，把找到的元素综合在一起
	var aEle = oParent.getElementsByTagName("*");

	for (var i = 0; i < aEle.length; i++) {

		if (aEle[i].className == sClass) {　　
			aResult.push(aEle[i]);		 //复合条件的添加到，aResult数组中
		}
	}
	return aResult;
}*/

//1、获取class的函数
//    //封装获取class函数 
//   //oParent;从哪个父级下面去选元素
//   //sClass; 我需要的class，具体是什么
function getByClass(oParent, sClass){
	
	var aResult = [];		//声明一个数组，把找到的元素综合在一起
	var aEle = oParent.getElementsByTagName("*");
	
	for (var i=0;i<aEle.length;i++) {
		
		if (aEle[i].className = sClass) {
			aResult.push(aEle[i]);   //复合条件的添加到，aResult数组中
		}
	}
	return aResult;
};


/*
	2016--02--17   
	1:总结整理是个好习惯
	2：创意源于生活，代码如诗从你我开始
	3：div完美居中，解决办法************************************************************************

*/
//2、共享onclick事件函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
//共享onclick事件函数结束


/*
	2016--02--17   
	1:总结整理是个好习惯
	2：创意源于生活，代码如诗从你我开始
	3：div完美居中，解决办法************************************************************************

*/
// 3.弹出div相对居中，用于登录弹窗，各种弹出框
//1 样式写好直接掉用即可
showDiv($(".alertInfo_libao"));
showDiv($(".alertInfo_yuanxiao"));
showDiv($(".alertInfo_No"));

//弹出居中
function showDiv(obj) {
	$(obj).hide();
	center(obj);
	$(window).scroll(function() {
		center(obj);
	});
	$(window).resize(function() {
		center(obj);
	});
}

function center(obj) {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"position": "absolute",
		"top": (windowHeight - popupHeight) / 2 + $(document).scrollTop(),
		"left": (windowWidth - popupWidth) / 2
	});
}
//弹出居中方法结束


/*
	2016--02--18 
	1:总结整理是个好习惯
	2：创意源于生活，代码如诗从你我开始
	3：*************************************************************************************

*/
//4:js运动基础动画
	//两个参数版本
window.onload = function()
{
	var oDiv = document.getElementById("div1");
	
	oDiv.onmouseover = function(){
		startMove(10,0);
	};
	
	oDiv.onmouseout = function(){
		startMove(-10,-150);
	};
};

var timer = null;
function startMove(speed1,offsetleft){
	
	var oDiv = document.getElementById("div1");
	
	clearInterval(timer);
	timer = setInterval(function(){

		var speed = speed1;   //速度
		
		if (oDiv.offsetLeft == offsetleft) 
		{
			clearInterval(timer);
		} 
		else
		{
			oDiv.style.left = oDiv.offsetLeft+speed+"px";
		}
	},30);
};

//一个参数版本
window.onload = function()
	{
		var oDiv = document.getElementById("div1");
		
		oDiv.onmouseover = function(){
			startMove(0);
		};
		
		oDiv.onmouseout = function(){
			startMove(-150);
		};
	};
	
	var timer = null;
	function startMove(offsetleft){
		
		var oDiv = document.getElementById("div1");
		
		clearInterval(timer);  //每次开始是，先结束之前的动画
		timer = setInterval(function(){
	
			var speed = 0;   //速度
			//var speed = speed1;   //速度
			if (oDiv.offsetLeft > offsetleft) 
			{
				speed = -10;
			} else{
				speed = 10;
			}
			
			if (oDiv.offsetLeft == offsetleft) 
			{
				clearInterval(timer);
			} 
			else
			{
				oDiv.style.left = oDiv.offsetLeft+speed+"px";
			}
		},30);
	};
	



/*
 *  cord全局样式
 *  2016--02--19
 *  创意源于生活，代码如诗从你我开始
 *  OOjs虽好，需培养，需规范，需慢慢品尝
 *  打字机效果
 ********************************************************************************************
 */

/*打字机效果----插件*/
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

/*调用代码*/
$(function() {
	$("#code").typewriter();
})


/*
 *  cord全局样式
 *  2016--02--19
 *  创意源于生活，代码如诗从你我开始
 *  OOjs虽好，需培养，需规范，需慢慢品尝
 *  
 * ***获取非行间属性
 ********************************************************************************************
 */
	function getStyle(obj,name){
		
		if (obj.currentStyle) {
			
			return obj.currentStyle[name];
			
		} else{
			
			return getComputedStyle(obj,false)[name];
			
		}
		
	};
	
	
	function getStyle(obj,name){
		
			return obj.currentStyle?obj.currentStyle[name] : getComputedStyle(obj,false)[name];
			
		}
/*
	getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。
	
	    getComputedStyle() gives the final used values of all the CSS properties of an element.

	语法如下：
	
	var style = window.getComputedStyle("元素", "伪类");
	
	例如：
	
	var dom = document.getElementById("test"),
	    style = window.getComputedStyle(dom , ":after");
	
	就两个参数，大家都懂中文的，没什么好说的。只是额外提示下：Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) 之前，第二个参数“伪类”是必需的（如果不是伪类，设置为null），不过现在嘛，不是必需参数了
	
	参考：http://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/
*/



//菜单导航 类似天猫、淘宝、京东等购物网站左侧二级导航

function tianmaoNav(){
	//商品分类
	$('.all-goods .item').hover(function(){
		$(this).addClass('active').find('s').hide();
		$(this).find('.product-wrap').show();
	},function(){
		$(this).removeClass('active').find('s').show();
		$(this).find('.product-wrap').hide();
	});
}
