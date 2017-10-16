//创建 Node.js 应用

var http = require('http');  								//载入http模块

http.createServer(function(req,res){						//创建服务器

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<h1>Node.js</h1>');
		res.write('<p>Hello World</p>');
		res.write('<p>beyondweb.cn</p>');
	}).listen(3000);											//绑定端口

console.log('HTTP server is listening at port 3000.');

//E:\0javascript进阶之路\node.js\安装