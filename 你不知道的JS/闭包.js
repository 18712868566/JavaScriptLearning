/**
 *
 * Created by jason on 2017/8/1.
 */
// 闭包
/*function foo() {
    var a = 2;
    function baz() {
        console.log( a );
    }

    bar( baz );
}

function bar(fn) {
    fn();
}
foo();*/

/*var fn;

function foo() {
    var a = 2;
    function baz() {
        console.log( a );
    }

    fn = baz;
}

function bar() {
    fn();
}

foo();

// bar();
fn();*/

function wait(message) {
    setTimeout(function timer() {
        console.log( message )
    },1000);
}

wait('hello lxf');































