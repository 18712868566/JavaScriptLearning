//8.2.4 装饰器模式 page277

var obj = {
    function : doSomething(){
        console.log('sure, asap');
    }
    //....
};

obj = obj.getDecorator('deco1');
obj = obj.getDecorator('deco13');
obj = obj.getDecorator('deco5');
obj.doSomething();

//8.2.4.1 具体实例  装饰一颗圣诞树

var tree = {};
tree.decorate = function(){
    alert('Make sure the tree wont fall');
};

tree.getDecorator = function(deco){
    tree[deco].prototype = this;
    return new tree[deco];
}

tree.RedBalls = function(){
    this.decorate = function(){
        this.RedBalls.prototype.decorate();
        alert('Put on some red balls');
    }
}

tree.BlueBalls = function(){
    this.decorate = function (){
        this.BlueBalls.prototype.decorate();
        alert('Add blur balls');
    }
}

tree.Angel = function(){
    this.decorate = function(){
        this.Angel.prototype.decorate();
        alert('An angel on the top');
    }
}

tree = tree.getDecorator('BlueBalls')
tree = tree.getDecorator('Angel')
tree = tree.getDecorator('RedBalls')

tree.decorate()