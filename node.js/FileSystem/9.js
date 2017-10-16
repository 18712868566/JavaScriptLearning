/**
 * Created by jason on 2017/7/27.
 */

var fs = require('fs');

/*
* fs.mkdir(path, [mode], callback)
*       path : 要创建的文件的路径
*       mode : 模式  读/写
*       callback : 回调
* */

//创建问价夹
/*fs.mkdir('./fileName',function (err) {
    console.log(arguments);

    if (err){
        console.log('文件夹创建失败!');
    }else{
        console.log('文件夹创建成功!');
    }
})*/


//移除文件夹
/*fs.rmdir('./filename',function () {
    console.log('删除文件夹成功!');
})*/


//文件夹下的信息

/*fs.readdir('./',function () {
    console.log(arguments);
})*/


//文件管理系统

fs.readdir('../FileSystem',function (err, fileList) {
    fileList.forEach(function (f) {
        fs.stat(f,function (err , info) {
            //console.log(arguments);
            switch ( info.mode ){
                case 16822:
                    console.log( '[文件夹] ' + f );
                    break;
                case 33206:
                    console.log( '[文件] ' + f );
                    break;
                default :
                    console.log('[其他类型]' + f);
                    break;
            }
        })
    })
})






























































