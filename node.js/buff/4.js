/**
 *
 * Created by jason on 2017/7/25.
 *
 * slice([start],[end]) :
 * 返回一个新的buffer.这个Buffer将会和老的Buffer引用相同的内存地址,
 * 在修改这个新的buffer实例slice切片.也会改变原来的buffer
 */

var bf = new Buffer('lixuefeng');
console.log(bf)

/*var bf2 = bf.slice();
console.log(bf2)*/

/*
var bf3 = bf.slice(2);
console.log(bf3);
bf3[0] = 2;
console.log(bf3);
console.log(bf);*/


/*
* copy(a,b,c,d);
*
*   a : 要拷贝到的位置
*   b : 考培开始的-起始位置
*   c : 被拷贝的数据的起始位置
*   d : 被拷贝的数据的结束位置,但是不包含指定位置
*
* */
var bf4 = new Buffer(20);
/*
bf.copy(bf4);
console.log(bf4)

bf4[0] = 2;
console.log(bf4);
console.log(bf);
*/

bf.copy(bf4,1,2,5)
console.log(bf4)
















