/**
 *
 * Created by jason on 2017/7/26.
 */

var fs = require('fs');

fs.open('1.txt', 'r' ,function (err, fd) {

    if(err){
        console.log('文件打开失败!');
    }else{
        console.log('文件打开成功!');
        //读取文件
        /*// 异步版本
        * fs.read(fd,buffer,offset,length,position,callback)
        *
        *       fd : 通过open方法成功打开一个文件返回的编号
        *       buffer : Buffer 对象
        *       offset : 新的内容添加到Buffer 中的起始位置
        *       length : 添加到Buffer 中内容的长度
        *       position : 读取的文件中的起始位置  (mull或者是具体数值)
        *       callback : 回调
        *           err : 错误信息
        *           len : 新的Buffer对象的 长度.
        *           newBf : 新的 Buffer 对象
        *
        * 同步版本
        *     fs.readSync(fd,buffer.offset,length,position)
        * */

        var bf1 = new Buffer('10000');
        console.log( bf1 );

        fs.read(fd , bf1, 0, 4, null, function (err, len, newBf) {
            console.log( bf1 );
            console.log( len );
            console.log( newBf );

        });

    }
})
























