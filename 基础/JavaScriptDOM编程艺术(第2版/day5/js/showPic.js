/* window.onload = function(){
    prepareGallery()
}*/
addLoadEvent(prepareGallery)


function prepareGallery(){
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('imagegallery')) return false;

    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function (){
            showPic(this);
            return false;
            // return showPic(this) ? false : true;
        }
    }

}

function showPic(whichpic){
    if (!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if (placeholder.nodeName != 'IMG') return false;
    placeholder.setAttribute('src',source);

    if (document.getElementById('description')) {
        var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : '';
        var description = document.getElementById('description')
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return false;
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

//平稳退化思想 最佳实践
/*
if (!document.getElementById) return false;
if (!document.getElementsByTagName) return false;
if (!document.getElementById || !document.getElementsByTagName) return false;

var supported = !document.getElementById && !document.getElementsByTagName;
if (!supported) return;
*/