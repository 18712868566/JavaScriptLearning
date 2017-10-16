/**
 * Created by jason on 2017/7/27.
 */

var fs = require('fs');

//监听文件
// *** 直接在 webStorm 中修改文本内容   -------  会触发 renname  实际上他应该触发    change
/*
* 正确的应该是:
*    在文件夹中修改 文件内容 会触发     --------    change
*    在文件夹中修改 文件的名字  会触发    -------    renname
* */

var filename = 'dle.new.txt';

fs.watch( filename , function (evt,filename) {
    //console.log(arguments);
    console.log(evt);

    if(filename){
        console.log(filename + '发生了改变');
    }else{
        console.log('文件没有找到!');
    }
});