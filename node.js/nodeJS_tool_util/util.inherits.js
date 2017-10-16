/**
 *
 * Created by jason on 2017/8/3.
 *
 *
 *
 */

var util = require('util');

function Base() {
    this.name = 'base';
    this.base = '1992';
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();     // base
objBase.sayHello();     // Hello base
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);


















































