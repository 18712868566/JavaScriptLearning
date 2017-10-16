
$(function(){
	
	//var oDiv = document.getElementById("div1");
	//var aImg = oDiv.getElementsByTagName("img");
	var oDiv = $("#div1");
	var aImg = $("#div1 img");
	

//	alert(aImg.length);
	for (var i=0;i<aImg.length;i++) {
		$("#div1 img").click( function () { $(this).hide(); });
	}
});

//video play
(function(){
	var playing=true;
	$("#music_icon").bind("click",function(){
		if(playing){
			$(this).find(".icon-audio-off").removeClass("hide");
			$(this).find(".icon-audio-on").addClass("hide");
			document.getElementById("audio").pause();
			playing=false;
		}else{
			$(this).find(".icon-audio-off").addClass("hide");
			$(this).find(".icon-audio-on").removeClass("hide");
			document.getElementById("audio").play();
			playing=true;
		}
	});
})();










