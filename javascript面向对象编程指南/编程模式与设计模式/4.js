var myapp = myapp || {};

myapp.namespace = function(name){
    var parts = name.split('.');
    console.log(parts);
    var current = myapp;
    for(var i in parts){
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
}


myapp.namespace('event');
myapp.namespace('dom.style');

/*
    上述代码等价于以下调用
    var myapp = {
        event :{ },
        dom: {
            style :{ }
        }
    }
*/