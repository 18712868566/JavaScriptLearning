$(document).ready(function () {
    var page = 1;
    $("#btn_more").click(function () {
        page++;
        var id = request('id');
        $.ajax({
            type: "get",
            url: "/simu/add_jz_more",
            contentType: "application/json;charset=utf-8",
            DataType: "json",
            data: { "id": id, "page": page },
            success: function (arry) {
                var list = arry.split('$');

                $("#table_list").append(list[0]);
                if (list[1] < 20) {
                    $("#moreflag").remove();
                }
            }
        })
    });
});

function show_jbxx(dangqian, zongshu) {
    var obj_title1 = "jbxx_title" + dangqian;
    var obj_con1 = "jbxx_con" + dangqian;
    if (document.getElementById(obj_title1) != null) {
        document.getElementById(obj_title1).className = "current";
        document.getElementById(obj_con1).style.display = "block";

        var zong = parseInt(zongshu);
        for (var i = 1; i <= zong; i++) {
            if (i != dangqian) {
                var obj_title2 = "jbxx_title" + i;
                var obj_con2 = "jbxx_con" + i;
                document.getElementById(obj_title2).className = "";
                document.getElementById(obj_con2).style.display = "none";
            }
        }
    }
}






