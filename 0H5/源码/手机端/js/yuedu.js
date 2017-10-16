onload = loadelemnt;
function loadelemnt() {
    var type = 1;
    type = request('type');
    if (type == "" || type == null) {
        type = 1;
     }
     showdata(type, 6);

     $("#dataul2 li:last").addClass("last");
     $("#dataul3 li:last").addClass("last");
     $("#dataul4 li:last").addClass("last");
     $("#dataul5 li:last").addClass("last");
     $("#dataul6 li:last").addClass("last");
}
function current(liid, divid) {
   
    document.getElementById("li1").className = "";
    document.getElementById("li2").className = "";
     document.getElementById("li3").className = "";
    document.getElementById("li4").className = "";
     document.getElementById("li5").className = "";
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
     document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
     document.getElementById("div5").style.display = "none";
    document.getElementById(liid).className = "current";
    document.getElementById(divid).style.display = "block";
 }
function showdata(id,zong) {
   
    for (var i = 1; i <= zong; i++) {
        var liTwo = "li" + i;
        var divTwo = "div" + i;
        if (i != id) {
            document.getElementById(liTwo).className = "";
            document.getElementById(divTwo).style.display = "none";
        }
    }
    var liOne = "li" + id;
    var divOne = "div" + id;
    document.getElementById(liOne).className = "current";
    document.getElementById(divOne).style.display = "block";
}



var type = request('type');
$(function () {
    type = 2;
    var page1 = 1;
    var page2 = 1;
    var page3 = 1;
    var page4 = 1;
    var page5 = 1;
    $("#datamore2").click(function () {
        $("#dataul2 li:last").removeClass();
        page1++;
        $.ajax({

            type: "get",
            url: "/geshang/AddMoreyuedu",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "type": type, "page": page1 },
            success: function (arry) {
                var list = arry.split('$');
                $("#dataul2").append(list[0]);
                if (list[1] < 10) {
                    $("#data2").remove();
                }

                $("#dataul2 li:last").addClass("last");
            }
        })

    });
    $("#datamore3").click(function () {
        type = 3;
        $("#dataul3 li:last").removeClass();
        page2++;
        $.ajax({
            type: "get",
            url: "/geshang/AddMoreyuedu",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "type": type, "page": page2 },
            success: function (arry) {
                var list = arry.split('$');
                $("#dataul3").append(list[0]);
                if (list[1] < 10) {
                    $("#data3").remove();
                }

                $("#dataul3 li:last").addClass("last");
            }
        })

    });
    $("#datamore4").click(function () {
        $("#dataul4 li:last").removeClass();
        type = 4;
        page3++;
        $.ajax({
            type: "get",
            url: "/geshang/AddMoreyuedu",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "type": type, "page": page3 },
            success: function (arry) {
                var list = arry.split('$');
                $("#dataul4").append(list[0]);
                if (list[1] < 10) {
                    $("#data4").remove();
                }

                $("#dataul4 li:last").addClass("last");
            }
        })

    });
    $("#datamore5").click(function () {
        $("#dataul5 li:last").removeClass();
        type = 5;
        page4++;
        $.ajax({
            type: "get",
            url: "/geshang/AddMoreyuedu",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "type": type, "page": page4 },
            success: function (arry) {
                var list = arry.split('$');
                $("#dataul5").append(list[0]);
                if (list[1] < 10) {
                    $("#data5").remove();
                }

                $("#dataul5 li:last").addClass("last");
            }
        })

    });
    $("#datamore6").click(function () {
        $("#dataul6 li:last").removeClass();
        type = 6;
        page5++;
        $.ajax({
            type: "get",
            url: "/geshang/AddMoreyuedu",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "type": type, "page": page5 },
            success: function (arry) {
                var list = arry.split('$');
                $("#dataul6").append(list[0]);
                if (list[1] < 10) {
                    $("#data6").remove();
                }

                $("#dataul6 li:last").addClass("last");
            }
        })

    });

});





