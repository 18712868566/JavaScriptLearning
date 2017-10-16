function getNewContent() {
    var require = getHTTPObject();
    if (require) {
        console.log(require);
        for(i in require){
            console.log(i)
        }
        require.open('GET','ajax.txt','true');

        require.onreadystatechange = function () {
            //处理相应
            if (require.readyState == 4) {
                var para = document.createElement('p');
                var text = document.createTextNode(require.responseText);
                para.appendChild(text);
                document.getElementById('new').appendChild(para);
            }
        };
        require.send(null);
    } else{
            alert('Sorry, your $.browser.version doesn\`t support XMLHttpRequest');
        }
}

window.onload = function () {
    getNewContent();
}

/*
    readyState 属性的值

        0 : 表示未初始化
        1 : 表示正在加载
        2 : 表示加载完毕
        3 : 表示正在交互
        4 : 表示完成

    responseText 属性 : 这个属性用于保存文本字符串形式的数据
*/