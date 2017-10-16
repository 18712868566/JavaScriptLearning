/**
 *
 * Created by jason on 2017/8/22.
 * js 语言核心
 *
 * 当将函数和对象合写在一起是,函数就变成了'方法'
 */

// 当函数赋值给 对象 的属性 我们称为 '方法' 所有的javascript 对象 都含有 方法
var a = [];                     //创建一个空数组
a.push(1,2,3);                  // push() 方法 向数组中添加元素
a.reverse();                    // 另一个方法: 将数组元素的次序反转

console.log(a)

// 求绝对值的函数
function abs(x) {
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}
console.log(abs(-2))

// 计算阶乘的函数
function factorial(n) {
    var product = 1;
    while (n > 1){
        product *= n;
        n--;
    }
    return product;
}
factorial(4);       // 24 : 1*4*3*2

function factorial2(n) {
    var i,product = 1;
    for (i =2;i <= n;i++){
        product *= i;
    }
    return product;
}

factorial2(5);      // 120 : 1*2*3*4*5

// 定义一个构造函数 初始化 一个新的 Point 对象
function Point(x, y) {
    this.x = x;
    this.y = y;
}
// 使用 new 关键字 和构造 函数来创建一个 实例
var p = new Point(1,1);

Point.prototype.r = function () {
    return Math.sqrt(                   // 返回 x^2 + y^2的 平方根
        this.x * this.x + this.y * this.y
    )
};

// Point 的实例对象 p (以及所有的Point 实例对象) 继承了方法 r()
p.r();





























