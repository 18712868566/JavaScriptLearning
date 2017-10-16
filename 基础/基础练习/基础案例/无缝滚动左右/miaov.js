window.onload=function(){
	scrollMove('roll')
};


function scrollMove(o) {
	// 动态创建
	var str = '<div class="roll" id="roll"><a href="javascript:void(0);" class="btn_left"></a><a href="javascript:void(0);" class="btn_right"></a><div class="wrap"><ul><li><a href="http://www.miaov.com/"><img src="images/1.jpg" /></a></li><li><a href="http://www.miaov.com/"><img src="images/2.jpg" /></a></li><li><a href="http://www.miaov.com/"><img src="images/3.jpg" /></a></li><li><a href="http://www.miaov.com/"><img src="images/4.jpg" /></a></li></ul></div></div>';
	var body = document.getElementsByTagName('body')[0];
	body.innerHTML = str;
	// 创建完毕
	var roll = document.getElementById(o);
	var aEle = roll.getElementsByTagName('*');
	var oBtnLeft = roll.getElementsByTagName('a')[0];
	var oBtnRight = roll.getElementsByTagName('a')[1];
	var oWrap = byClass('wrap');
	var oUl = roll.getElementsByTagName('div')[0].getElementsByTagName('ul')[0];
	var aLi = oWrap.getElementsByTagName('li');
	// alert(aLi.length)
	var iTime = null;
	var speed = 30;
	var toggle = -1;
	var iNow = 5;

	// 复制 填充
	oUl.innerHTML += oUl.innerHTML;
	// console.log(aLi.length);
	oUl.style.width = aLi.length * aLi[0].offsetWidth + 'px';
	// console.log(aLi[0].offsetWidth)

	function goMove(toggle){
		if (iTime) {
			clearInterval(iTime);
		}

		iTime = setInterval(function(){
			iNow += 2*toggle;
			if (iNow > 0) {
				iNow = -aLi.length * aLi[0].offsetWidth /2;
			}
			if (Math.abs(iNow) > aLi.length * aLi[0].offsetWidth/2) {
				iNow = 0;
			}
			oUl.style.left = iNow + 'px';

		},speed)
	};

	goMove(toggle)

	oBtnLeft.onmouseover = function(){
		toggle = -1;
		goMove(toggle);
	};
	oBtnRight.onmouseover = function(){
		toggle = 1;
		goMove(toggle);
	};

	oUl.onmouseover = function(){
		if (iTime) {clearInterval(iTime)};
	}
	oUl.onmouseout = function(){
		goMove(toggle);
	}

	function byClass(sClassName) {
		for (var i = 0; i < aEle.length; i++) {
			if (aEle[i].className == sClassName) {
				return aEle[i];
			}
		}
	};

}




















































/*var g_bMoveLeft=true;
var g_oTimer=null;
var g_oTimerOut=null;

var g_iSpeed=3;

window.onload=function ()
{
	var oDiv=document.getElementById('roll');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aA=oDiv.getElementsByTagName('a');

	var i=0;

	var str=oUl.innerHTML+oUl.innerHTML;

	oUl.innerHTML=str;

	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover=function ()
		{
			stopMove();
		};

		aLi[i].onmouseout=function ()
		{
			startMove(g_bMoveLeft);
		};
	}

	aA[0].onmouseover=function ()
	{
		startMove(true);
	};

	aA[1].onmouseover=function ()
	{
		startMove(false);
	};

	startMove(true);
};

function startMove(bLeft)
{
	g_bMoveLeft=bLeft;

	if(g_oTimer)
	{
		clearInterval(g_oTimer);
	}
	g_oTimer=setInterval(doMove, 30);
}

function stopMove()
{
	clearInterval(g_oTimer);
	g_oTimer=null;
}

function doMove()
{
	var oDiv=document.getElementById('roll');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');

	var l=oUl.offsetLeft;

	if(g_bMoveLeft)
	{
		l-=g_iSpeed;
		if(l<=-oUl.offsetWidth/2)
		{
			l+=oUl.offsetWidth/2;
		}
	}
	else
	{
		l+=g_iSpeed;
		if(l>=0)
		{
			l-=oUl.offsetWidth/2;
		}
	}

	oUl.style.left=l+'px';
}*/