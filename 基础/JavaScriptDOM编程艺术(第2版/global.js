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

/*
    //DOM没有提供insertAfter()方法

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


function getElementsByClassName(className,root,tagName) {    //root：父节点，tagName：该节点的标签名。 这两个参数均可有可无
    if(root){
        root=typeof root=="string" ? document.getElementById(root) : root;
    }else{
        root=document.body;
    }
    tagName=tagName||"*";
    if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用
        return root.getElementsByClassName(className);
    }else {
        var tag= root.getElementsByTagName(tagName);    //获取指定元素
        var tagAll = [];                                    //用于存储符合条件的元素
        for (var i = 0; i < tag.length; i++) {                //遍历获得的元素
            for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
                if(n[j]==className){
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}