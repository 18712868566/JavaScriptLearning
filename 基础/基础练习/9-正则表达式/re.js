// 正则表达式是匹配模式，要么匹配字符，要么匹配位置。请记住这句话。
// 正则对象
/* 
    @number : 数字
    @email : Email地址
    @qq : (腾讯QQ号从10000开始)
    @ip : IP地址  (由@飞龙三少 提供,感谢共享)
    @phone : 手机号码
    @personId : 身份证号(15位、18位数字)
    @personStr : 短身份证号码(数字、字母x结尾) /^([0-9]){7,18}(x|X)?$/
*/
var reg ={
    number : /^[0-9]*$/,
    email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    qq : /[1-9][0-9]{4,}/,
    ip : /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
    phone : /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
    personId : /^\d{15}|\d{18}$/,
    personStr : /^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/
};


// 匹配颜色

var re = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = '#ffbbad #Fc01DF #FFF #ffE';

console.log( string.match(re) );
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

// 匹配时间

var re = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( re.test('23:40') );
console.log( re.test('00:01') );
// true
// true

// 省略前边的0 
var re = /^(0?[01][0-9]|[2][0-3]):(0?[0-5][0-9])$/;


// 匹配日期 yyyy-mm-dd  2017-06-10

var re = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( re.test('2017-10-10') );
// true


// 匹配window 操作系统文件路径
/* 
    盘符:\文件夹\文件夹\文

    F:\study\javascript\regex\regular expression.pdf
    F:\study\javascript\regex\
    F:\study\javascript
    F:\ 
*/

var re = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n]+\\)*([^\\:*<>|"?\r\n]+)?$/;
console.log( re.test( 'F:\\study\javascript\\regex\\regular expression.pdf') );
console.log( re.test( 'F:\\study\javascript\\regex\\') );
console.log( re.test( 'F:\\study\javascript') );
console.log( re.test( 'F:\\') );

// 匹配 id
/* 
    match 返回的一个数组，第一个元素是整体匹配结果，然后是各个分组（括号里）匹配的
    内容，然后是匹配下标，最后是输入的文本。另外，正则表达式是否有修饰符 g，match
    返回的数组格式是不一样的。

    <div id="container" class="main"></div>
*/

var re = /id="[^"]*"/;
var string = '<div id="container" class="main"></div>';

console.log( string.match(re) );
// ["id="container"", index: 5, input: "<div id="container" class="main"></div>"]
// id="container"

