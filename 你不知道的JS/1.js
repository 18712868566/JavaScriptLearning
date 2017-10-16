/**
 *
 * Created by jason on 2017/8/1.
 */

// 函数提升

/*
a = 2;
var a;
console.log(a);
*/


/*{ console.log(a);     //undefined

var a = 2;}*/

function foo() {
    var a;
    console.log( a );

    a = 2;
}

foo();

// ReferenceError（引用错误） 对象表明一个不存在的变量被引用。
// TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。








































