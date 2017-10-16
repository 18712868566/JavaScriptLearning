function ajax(url, fnSucc, fnFaild) {

    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    }else{
        oAjax = new ActiveXObject('Microsift.XMLHTPP');
    }

    oAjax.open('GET', url, true);

    oAjax.send();

    oAjax.onreadystatechange = function(){
        // 请求完成
        if (oAjax.readyState == 4) {
            // 请求成功
            if (oAjax.status == 200) {
                // alert('成功!' + oAjax.responseText);
                // oP.innerHTML = oAjax.responseText;
                fnSucc(oAjax.responseText);
            }else{
                // alert('失败!')
                if (fnFaild) {
                    fnFaild(oAjax.status);
                }
            }
        }
    }
}