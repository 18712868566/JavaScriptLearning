 /*注册删除*/
 $(function(){
	    $(".delete").on("click",
		    function() {
		        var d = $(this).parents(".input-a").find("input");
		        d.val("");
		        $(this).hide();
		        b();
		    });	
	  	
	 $(".sn-block input").on("keyup change",
    function() {
        var d = $(this).val(),
        f = $(this).parents(".input-a").find(".delete");
        if (d) {
            f.show();
        } else {
            f.hide();
        }
        b();
    			});
/*注册按钮*/
    function b() {
        var d = true;
        $("input").each(function() {
            var f = $(this).parents(".input-a");
            if (!f.is(":hidden") && !$(this).is(":hidden")) {
                var e = $(this).val();
                if (!$(this).hasClass("sn-checkbox")) {
                    if (!e) {
                        d = false;
                    }
                } else {
                    if (!$(this).is(":checked")) {
                        d = false;
                    }
                }
            }
        });
        if (d) {
            $(".ClickButton").removeClass("ClickButton").addClass("XuanzhongClickButton");
            $(".XuanzhongClickButton").attr("href","注册第二步.html");
        } else {
            $(".XuanzhongClickButton").removeClass("XuanzhongClickButton").addClass("ClickButton");
            $(".ClickButton").attr("href","#");
        }
    }
	  			});
	  			

/*商品店铺搜索切换*/
$(function() {
    $(".search-switch").on("click",
    function() {
        "0" == $(this).attr("data-rel") ? $(this).attr("data-rel", "1").text("店铺") : $(this).attr("data-rel", "0").text("商品")
    })
   })

/*商品店铺删除*/

 $(function(){
	    $(".clo-se-input").on("click",
		    function() {
		        var a = $(this).parents(".sn-nav-inp").find("input");
		        a.val("");
		        $(this).hide();
		    });	
	  	
	 $(".wbox-flex input").on("keyup change",
    function() {
        var h = $(this).val(),
        k = $(this).parents(".sn-nav-inp").find(".clo-se-input");
        if (h) {
            k.show();
        } else {
            k.hide();
        }
    			});
    	})









