/**
 *
 * Created by jason on 2017/7/26.
 */
var fs = require('fs');

var filename = '4.txt';

// 异步方式
/*fs.exists(filename,function (isExists) {
    //console.log(isExists);
    if (!isExists){
        fs.writeFile(filename, 'lixuefeng', function (err) {
            if (err){
                console.log('出错了!');
            }else{
                console.log('创建文件成功!');
            }
        })
    }else{
        fs.appendFile(filename, '20170726 学习了 nodeJS', function (err) {

            if (err){
                console.log('新内容追加失败!');
            }else{
                console.log('新内容追加成功!');
            }
        })

    }

})*/


//同步模式 existsSync 判断一个文件是否存在
var f = fs.existsSync(filename)
console.log(f);
if( !fs.existsSync(filename) ){
    fs.writeFileSync(filename,'lixuefeng');
    console.log('新文件创建成功!');
}else{
    fs.appendFileSync(filename, '-2017-07-26');
    console.log('新内容追加成功!');
}

// FileSystem-5 第五课已看完,明天继续第6课



















