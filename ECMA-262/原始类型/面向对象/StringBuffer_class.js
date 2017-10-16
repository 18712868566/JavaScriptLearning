/*
var str = "hello ";
str += "world";

实际上，这段代码在幕后执行的步骤如下：
1、创建存储 "hello " 的字符串。
2、创建存储 "world" 的字符串。
3、创建存储连接结果的字符串。
4、把 str 的当前内容复制到结果中。
5、把 "world" 复制到结果中。
6、更新 str，使它指向结果。

//解决方法是用 Array 对象存储字符串，然后用 join() 方法（参数是空字符串）创建最后的字符串。想象用下面的代码代替前面的代码：

var arr = new Array();
arr[0] = "hello";
arr[1] = "world";
var str = arr.join("");

//这样，无论数组中引入多少字符串都不成问题，因为只在调用 join() 方法时才会发生连接操作。此时，执行的步骤如下：
//1、创建存储结果的字符串
//2、把每个字符串复制到结果中的合适位置


//虽然这种解决方案很好，但还有更好的方法。问题是，这段代码不能确切反映出它的意图。要使它更容易理解，可以用 StringBuffer 类打包该功能：

function StringBuffer(){
	this._strings_ = new Array();    //私有
}

StringBuffer.prototype.append = function(str){
	this._strings_.push(str);
}
StringBuffer.prototype.toString = function(){
	return this._strings_.join("");
}


//这段代码首先要注意的是 strings 属性，本意是私有属性。它只有两个方法，即 append() 和 toString() 方法。append() 方法有一个参数，它把该参数附加到字符串数组中，toString() 方法调用数组的 join 方法，返回真正连接成的字符串。要用 StringBuffer 对象连接一组字符串，可以用下面的代码：

var buffer = new StringBuffer();
buffer.append("hello");
buffer.append("world");
var  result = buffer.toString();

document.write(buffer);
*/

function StringBuffer () {
  this._strings_ = new Array();
}

StringBuffer.prototype.append = function(str) {
  this._strings_.push(str);
};

StringBuffer.prototype.toString = function() {
  return this._strings_.join("");
};

var d1 = new Date();
var str = "";
for (var i=0; i < 10000; i++) {
    str += "text";
}
var d2 = new Date();

document.write("Concatenation with plus: "
 + (d2.getTime() - d1.getTime()) + " milliseconds");

var buffer = new StringBuffer();
d1 = new Date();
for (var i=0; i < 10000; i++) {
    buffer.append("text");
}
var result = buffer.toString();
d2 = new Date();

document.write("<br />Concatenation with StringBuffer: "
 + (d2.getTime() - d1.getTime()) + " milliseconds");



//statusbar = "put your message here"

//window.status("put your message here")
//status("put your message here")

