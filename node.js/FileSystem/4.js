/**
 *
 * Created by jason on 2017/7/26.
 */

var fs = require('fs');

fs.open('1.txt','r+',function (err, fd) {

    /*
    * 当我们要对打开的文件进行写操作的时候,打开文件的模式应该是 读/写 方式
    *
    * fs.write(fd,buffer,offset,length,position,callback)
    *      fd : 打开的文件,通过open方法成功打开一个文件返回的编号
    *      buffer : Buffer 对象 , 要写入的数据
    *      offset : 新的内容添加到Buffer 中的起始位置
    *      length : 添加到Buffer 中内容的长度
    *      position : 读取的文件中的起始位置  (mull或者是具体数值)
    *      callback : 回调
    *         err : 错误信息
    *         len : 新的Buffer对象的 长度.
    *         newBf : 新的 Buffer 对象 插入的数据内容
    * */

    if(err){
        console.log('打开文件失败!');
    }else{

        var bf = new Buffer('defghjkl');

        /*fs.write(fd, bf, 0, 6, 5, function () {
            console.log(arguments);
            /!*
            * err : 错误信息
            * len : 插入数据的长度
            * newBf : 插入的数据内容
            * *!/
        })*/

        //另一种写法
        fs.write( fd, 'miaov', 5, 'utf-8' ,function () {
            console.log('数据写入完毕!');
        });

        //关闭文件,在想对文件进行操作的话,要先 open
        fs.close(fd,function () {
            console.log('文件已关闭!');
        });

    }

})














































