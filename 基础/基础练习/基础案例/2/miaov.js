window.onload=function (){

	var oDiv = document.getElementById('drop');
	var oH2 = oDiv.getElementsByTagName('h2')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var off = false;
	oH2.onclick = function(){
		if (off) {
			oUl.style.display = 'block';
			this.className = 'up';
			off = false;
		}else{
			oUl.style.display = 'none';
			this.className = 'down';
			off = true;
		}
	}
}


function showHideUl(){
	var oDiv = document.getElementById('drop');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var oH2 = oDiv.getElementsByTagName('h2')[0];

	if (oUl.style.display === 'none') {
		oUl.style.display = 'block';
		oH2.className = 'up';
	}else{
		oUl.style.display = 'none';
		oH2.className = 'down';
	}
}