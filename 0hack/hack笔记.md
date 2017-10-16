##兼容性

	###H5标签的兼容?
	
		ie6  ---	document.createElement('name')  在js中动态创建一个标签  自定义标签,默认默认内联元素  display:block;
			 ---	引入google H5 库
	
	###浮动?
	
		ie6  ---	元素浮动之后,能设置宽度的话就给元素加宽度,如果需要宽度是内容撑开,就给它里边的块元素加上浮动
	
					浮动元素下的块元素,不继承父级的浮动,这里需要手动设置浮动,自适应高度
			 
	###第一块元素浮动,第二块元素加margin值等于第一块元素,在ie6下会有间隙问题?
		
		ie6  ---	解决方案 1.不建议这种写法 		2.用浮动解决
			 		
			 			
	###IE6下子元素超出父级宽高,会把父级宽高撑开?
		
		ie6  ---	解决方案 1.不要让子元素的宽高超过父级的宽高
	
	###p包含块元素嵌套规则?
		
		p,td,h 块元素不能再包含块元素
		
		ie6  ---	
		google  ---		dom结构改变为:	<p></p>
										<div>this is div </div>
										<p></p>
	###margin兼容性?
		
		详情请见  ---   margin兼容性.html	
			
				问题1	-	margin-top 传递?
							解决方案:{overflow:hidden;zoom:1;}
								触发BFC,haslayout
								
				问题2	-	上下margin叠压?
							解决方案:{}
							尽量使用同一方向的margin,比如都设置top或者bottom
				
	###display:inline-block
	
		ie6    ---	 解决方案
						 *display:inline;
						 *zoom:1;			
				
				
	###ie6下最小高度
	
		ie6 下最小高低19px
			解决方案		*overflow: hidden;    //设置为1像素
			
			
	###ie6双边距
		
		ie6  ---	当元素浮动后,在设置margin 那么就会产生双倍边距		(左)	
		ie6  ---	*display:inline;
		
		兼容性讲解   (5)
				
				
	###li里元素都浮动 li在ie6/7下方会产生4px的间隙问题
		
		详情 --- 10兼容性.html			
				
		解决方案		*vertical-align: top;    //属性设置元素的垂直对齐方式。
				
				
	###	ie6   文字溢出 (小尾巴)----      触发条件--   父元素 下两个浮动元素中间有注释或者内联元素时并且和父级宽度相差不超过3px,
	
		解决方案		1.连个浮动元素间避免出现内联元素和注释
						2.与父级宽度相差3px或以上
						

	###ie 6/7 父级元素的overflow:hidden,包不住子集的position:relative
	
		解决方案: 针对ie6/7 给父级元素添加相对定位  
	
	
	### ie下绝对定位元素父级宽高是奇数,绝对定位元素的right和bottom值,会有1px的偏差
	
		解决方案: 避免父级宽高出现奇数/

	###	ie6下绝对定位元素和浮动元素并列,绝对定位元素消失
		
		12兼容性.html
		
		解决方案: 设置在不同级  

	### ie6 下input的空隙
	
		 	
		解决方案: ie 6-7 给input 添加浮动  *float: left;
			      ie 8 						display: block;

	### ie6下输入类型表单控件背景问题
	
		解决方案: 输入类型控件滚动问题  , 添加background: url(../images/img1.png) no-repeat fixed;  添加fixed属性   固定
		
	### 样式优先级
		
		!important 高于行间样式 