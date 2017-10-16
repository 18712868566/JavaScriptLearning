
//改变导航条状态
function changeClassName(id, zong) {
    var tdOne = "td" + id;
    document.getElementById(tdOne).className = "current";
    for (var i = 1; i <= zong; i++) {
        var tdTwo = "td" + i;
        if (i != id) {
            document.getElementById(tdTwo).className = "";
        }
    }
}

//改变导航条状态
function clearClass(zong) {
    for (var i = 1; i <= zong; i++) {
        var tdTwo = "td" + i;
        document.getElementById(tdTwo).className = "";
    }
}
//获得参数的值
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf
        ("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    }
    else {
        return returnValue;
    }
}