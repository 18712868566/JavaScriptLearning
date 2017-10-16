/**
 * Created by jason on 2017/8/2.
 */

exports.world = function () {
    console.log('hello world');
}

module.exports.foo = function () {
    console.log('有个爱你的人不容易,你为何不去好好珍惜!');
}
module.exports.Music = {
    world : function (msg) {
        console.log(msg);
    },
    foo : function (msg2) {
        console.log(msg2);
    },
    name : '<<有个爱你的人不容易>>',
    age : 25,
    job : 'web前端开发'
}


/*
* //hello.js

 function Hello() {
 var name;
 this.setName = function (thyName) {
 name = thyName;
 };

 this.sayHello = function () {
 console.log('Hello' + name);
 };
 };

 module.exports = Hello;

 //main.js

 var Hello = require('./hello');
 hello = new Hello();
 hello.setName('BYVoid');
 hello.sayHello();
 */








































