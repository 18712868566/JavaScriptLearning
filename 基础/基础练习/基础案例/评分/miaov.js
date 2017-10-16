window.onload=function(){
	var oPingFen = document.getElementById('pingfen');
	var aList = document.getElementsByTagName('li');
	var i = 0;
	for (i = 0; i < aList.length; i++) {

		aList[i].index = i;

		aList[i].onmouseover = function(){
			for (i = 0; i < aList.length; i++) {
				console.log(i)
				// console.log(this.index)
				if (i <= this.index) {
					aList[i].style.background = 'url(star.gif) no-repeat 0 -29px';
				}else{
					aList[i].style.background = 'url(star.gif) no-repeat 0 0px';
				}
			}
		};

		aList[i].onmousedown = function(){
			alert('提交成功: ' + (this.index+1) + ' 分');
		}
	}
};