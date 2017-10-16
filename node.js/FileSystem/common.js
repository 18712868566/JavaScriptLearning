/**
 * Created by jason on 2017/7/27.
 */

//利用node.js 自动构建一个 项目 目录


var projectDate = {
    'name' : './20170728',
    'fileDate' : [
        {
            'name' : 'css',
            'type' : 'dir'
        },
        {
            'name' : 'js',
            'type' : 'dir'
        },
        {
            'name' : 'images',
            'type' : 'dir'
        },
        {
            'name' : 'index.html',
            'type' : 'file',
            'content' : '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1> 2017 07 27 空中网装甲风暴专题制作 </h1>\n\t</body>\n</html>'
        }
    ]
}

var fs = require('fs');

if( projectDate.name ){
    console.log( projectDate.name );
    fs.mkdirSync( projectDate.name );

    var fileDate = projectDate.fileDate;

    if( fileDate && fileDate.forEach ){

        fileDate.forEach(function (f) {

            f.path = projectDate.name + '/' + f.name;

            f.content = f.content || '';

            switch (f.type){

                case 'dir':
                    fs.mkdirSync(f.path);
                    break;

                case 'file':
                    fs.writeFileSync(f.path, f.content )
                    break;

                default :
                    break;
            }
        })
    }

};



























