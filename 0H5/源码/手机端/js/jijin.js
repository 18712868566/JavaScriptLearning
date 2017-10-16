$(document).ready(function () {
    changeClassName(4, 6);


    //$("#jczslist li:last").addClass("last");
    var num1 = request('num1'); if (num1 == "") { num1 = "0"; }
    var num2 = request('num2'); if (num2 == "") { num2 = "0"; }
    var num3 = request('num3'); if (num3 == "") { num3 = "0"; }
    var num4 = request('num4');
    $("#sel_lx").attr("value", num1);
    $("#sel_fx").attr("value", num2);
    $("#sel_nh").attr("value", num3);
    $("#txt_tf_gjz").val(unescape(num4));

    $("#btn_jinjin_sx").click(function () {
        var pp1 = $("#sel_lx").val();
        var pp2 = $("#sel_fx").val();
        var pp3 = $("#sel_nh").val();
        var pp4 = $("#txt_tf_gjz").val();
        location.href = "/simu/jijin?num1=" + pp1 + "&num2=" + pp2 + "&num3=" + pp3 + "&num4=" + escape(pp4) + "";
    });

    var page = 1;
    $("#btn_more").click(function () {
         num1 = $("#sel_lx").val();
         num2 = $("#sel_fx").val();
         num3 = $("#sel_nh").val();
         num4 = $("#txt_tf_gjz").val();
        page++;
        $.ajax({
            type: "get",
            url: "/simu/add_jijin_more",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "num1": num1, "num2": num2, "num3": num3, "num4": num4, "page": page },
            success: function (arry) {
                var list = arry.split('$');

                $("#table_list").append(list[0]);
                if (list[1] < 20) {
                    $("#moreflag").remove();
                }
            }
        })
    })
});



