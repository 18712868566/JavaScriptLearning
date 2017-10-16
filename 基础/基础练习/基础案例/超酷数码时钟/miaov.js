var timer = null;
var aNow = null;

var g_aImg = [];
var g_oImgWeek = null;
var g_aWeekName =
[
	'one',
	'two',
	'three',
	'four',
	'five',
	'sex',
	'seven'
];



window.onload = function(){

	var oDiv = document.getElementById('clock');
	var aImg = oDiv.getElementsByTagName('img');

	for (var i = 0; i < aImg.length; i++) {
		if (!isNaN(parseInt(aImg[i].alt))) {
			g_aImg.push(aImg[i]);
		}
	};

	// 星期
	g_aImg.push(aImg[aImg.length-2]);

	aNow = getTimeArray();

	for (var i = 0; i < g_aImg.length; i++) {
		g_aImg[i].now = -1;
	}

	checkSwitch();

	setInterval(checkSwitch,1000);
	checkSwitch();
}

var g_iImgHeight = 0;
var g_iTarget = 0;
var g_iMax = 0;

function checkSwitch() {
	var i = 0;
	aNow = getTimeArray();

	g_imgHeight = g_aImg[0].offsetHeight;
	g_iTarget =- g_imgHeight;
	g_iMax = g_imgHeight;

	timer = setInterval(doSwitch,30);
};

function doSwitch() {
	var bEnd = false;

	g_imgHeight -= 5;
	if (g_imgHeight <= g_iTarget) {
		g_imgHeight = g_iTarget;
		bEnd = true;
	}

	for (var i = 0; i < g_aImg.length; i++) {
		if (g_aImg[i].now != aNow[i]) {
			if (g_imgHeight >0) {
				g_aImg[i].style.height = g_imgHeight + 'px';
				g_aImg[i].style.top =- (g_iMax - g_imgHeight) /2 + 'px';
			}else{
				if (i == g_aImg.length -1) {
					g_aImg[i].src = 'images/' + g_aWeekName[aNow[i]]+ '.png';
				}else{
					g_aImg[i].src = 'images/' + aNow[i] + '.png';
				}

				g_aImg[i].style.height =- g_imgHeight +'px';
				g_aImg[i].style.top =- (g_iMax + g_imgHeight) /2 +'px';
			}
		}
	}


	if (bEnd) {
		for (var i = 0; i < g_aImg.length; i++) {
			g_aImg[i].now = aNow[i];
		}

		clearInterval(timer);
	}
};


function toDouble(iNum){
	if (iNum < 10) {
		return '0' + iNum;
	}else{
		return '' + iNum;
	}
};
function getTimeArray() {
	var oDate = new Date();
	var aNumber = [];

	var iYear = oDate.getYear();
	var iMonth = oDate.getMonth();
	var iDay = oDate.getDate();
	var iHour = oDate.getHours();
	var iMin = oDate.getMinutes();
	var iSec = oDate.getSeconds();
	var iWeek = (oDate.getDay() + 6) % 7;


	if (iYear < 1900) {
		iYear += 1900;
	}

	var str = '' + (iYear) + toDouble(iMonth+1)+toDouble(iDay)+toDouble(iHour)+toDouble(iMin)+toDouble(iSec)+iWeek;
	var aChar = str.split('');

	console.log(str);
	for (var i = 0; i < aChar.length; i++) {
		aNumber[i] = parseInt(aChar[i]);
	}

	return aNumber;
};