/**
 * Created by jason on 2017/7/26.
 */


//fs 模块
var fs = require('fs');

/*
*  fs.open(path,flags,[mode],callback)
*       path : 要打开的文件的路径
*       flags : 打开文件的方式     读/写
*       mode : 设置文件的模式,     读/写/执行  4/2/1  (window作用下有限 所以一般不填)
*       callback : 回调
*           err : 文件打开失败的错误保存在err里面 , 如果成功err 为 null
*           fd : 被打开文件的标识   (和定时器类似)
* */


fs.open('1.txt', 'r' , function (err, fd) {

    //console.log(err);
    //console.log(fd);

    if (err){
        console.log('文件打开失败!');
    }else{
        console.log('文件打开成功!')
        console.log( fd );      // 内部有调用 现在是 3  (有自动记录功能)
    }

})


fs.open('1.txt' , 'r' ,function (err, fd) {
    console.log( fd );          //再次调用的时候, fd 的标识 加了1
})
































