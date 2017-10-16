/*

alert("sdad");

*/

function pasta(grain,width,shape,hasEgg){
	//是用什么粮食做的
	this.grain = grain;

	//多宽
	this.width = width;

	//横截面形状？（字符串）
	this.shape = shape;

	//是否加蛋黄
	this.hasEgg = hasEgg;

	//这里添加toString方法（如下定义）
	//注意在函数的名称后没有加圆括号；
	//这不是一个函数调用，而是对函数的引用
	this.toString = pastaToString;
}

//定义了构造器后，用new运算符创建对象实例
var spaghetti = new pasta("wheat",0.2,"circle",true);
var linguine = new pasta("wheat",0.3,"oval",true);


//shaghetti 的附加属性
spaghetti.color = "pale straw";
spaghetti.drycook = 7;
spaghetti.freshcook = 0.5;
//  console.log(spaghetti);

var chowFun = new pasta("rice",3,"flat",false);
//chowFun对象或其他现有的pasta对象
//都没有填加到spaghetti对象的是哪个新属性


pasta.prototype.foodgroup = "carbohydrates"

/*
	将属性‘foodgroup’加到pasta原型对象中，这样pasta对象的
所有实例都可以有该属性，包括哪些已经生成的实例。
	现在spaghetti.foodroup、chowFun.foodgroup，等等
均包含值  "carbohydrates"
*/


//实际的用来显示past对象内容的函数
function pastaToString(){
	//返回对象的属性

	return "Grain: " + this.grain +"\n"+
	"Width: " + this.width +"\n"+
	"Shape: " + this.shape + "\n"+
	"Egg?: "  + Boolean(this.hasEgg);
}

var spaghetti = new pasta("wheat",0.2,"circle",true);
//将调用 toString() 并显示  spaghetti 对象的属性（需要 internet浏览器）

//window.alert(spaghetti);
//console.log(spaghetti);
//console.log(spaghetti);

