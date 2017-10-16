
/*

console.log("hello world");

	console.info("信息");

	console.error("错误");

	console.warn("警告");
	
	//占位符
	console.log('%d年%d月%d日',2011,3,26);
	
	//信息分组
	console.group('第一组信息');
		
			console.log('1:xxx');
			console.log('2:xxx');
		console.groupEnd();
	console.group("第二组信息");
			console.log('3:xxx');
			console.log('4:xxx');
	console.groupEnd();
	
	//查看对象信息
	
	var info = {
		blog : 'http://www.baidu.com',
		QQGroup:617105706,
		message:'程序爱好者欢迎你的加入'
		
	};
	console.dir(info);
	
	//显示某个节点的信息
	var info = document.getElementById('info');
	console.dirxml(info);
	
	//判断变量是否是真,,,,no
	
	var result = 1;
	console.assert(result);
	var year = 2014;
	console.assert(year == 2008)
	
	window.onload = function myConsolg(){

}
*/
	//函数是如何被调用的，在其中加入consolg.trace()方法就行了
	
	function add(a,b){
		console.trace();
		
			return a+b;
	}
	
	var x = add(1,1);
	
	function add(a,b){return add2(a,b);}
	function add(a,b){return add1(a,b);}
	function add(a,b){return add(a,b);}
	

	
















