/**
 * Created by jason on 2017/7/27.
 */
/*
var fs = require('fs');
fs.exists('kz' , function (exists) {
    //console.log(exists ? '创建失败' : '创建成功');
    console.log(exists);

    if(exists){
        console.log('创建失败')
    }else{
        console.log('创建成功')
    }
})*/


/*
 删除文件——
fs.unlink('./kz',function (err) {
    console.log(err);
    console.log(err ? '删除失败' : '删除成功');
});*/
var fs = require('fs');

/*fs.readdir('../FileSystem',function (err, fileList) {
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
})*/

//删除文件夹——
/*fs.rmdir('../FileSystem/miaov', function(err){
    console.log( err );
    if(err){
        console.log("删除失败！");
    }else{
        console.log("删除成功！");
    }
});*/

// 判断a文件夹是否存在
fs.exists('../FileSystem/miaov', function(exists){
    if(exists){
        console.log("文件夹存在");
    }else{
        console.log("文件夹不存在")
    }
});