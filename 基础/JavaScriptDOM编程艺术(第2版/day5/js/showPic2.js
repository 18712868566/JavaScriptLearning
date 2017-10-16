/*
这个函数用到了一下dom方法和属性
    parentNode属性
    lastChild属性
    appendChild方法
    insertBefore方法
    nextSibling属性
首先，这个函数有2个参数：新元素与目标元素。这2个参数通过变量newElement和targetElement被传递到这个函数。
把目标元素的parentNode属性值保留在变量parent里。
检查目标元素是不是parent 的最后一个子元素，即比较parent元素的lastChild属性值与目标元素是否存在“等于”关系。
如果是，就用appendChild方法追加。
如果不是，就把新元素插入到目标元素和目标元素的下一个兄弟元素之间。目标元素的下一个兄弟元素即目标元素的nextSibling属性。然后用insertBefore方法把新元素插入到目标元素的下一个兄弟元素之前。
ps：像这种实用型的函数有必要收录在你的脚本里。
*/
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        // 如果最后的节点是目标元素，则直接添加。因为默认是最后
        parent.appendChild(newElement);
    }else{
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

 function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function preparePlaceholder(argument) {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    var placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','images/yfjl1.png');
    placeholder.setAttribute('alt','my images gallery');
    var description = document.createElement('p');
    description.setAttribute('id','description');
    var desctext = document.createTextNode('Choose an image');

    description.appendChild(desctext);

    var gallery = document.getElementById('imagegallery');
    //把站位的图片插入到 导航之后
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('imagegallery')) return false;

    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function (){
            return showPic(this);
        }
        //tab 切换 Enter 添加键盘事件
        links[i].onkeypress = links[i].onclick;
    }
}

function showPic(whichpic){
    if (!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if (!document.getElementById('description')) return false;
    if (whichpic.getAttribute('title')) {
        var text = whichpic.getAttribute('title');
        //alert(text)
    }else{
        var text = '';
    }

    var description = document.getElementById('description');
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);