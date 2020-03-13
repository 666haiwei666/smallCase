var fs=require('fs');
fs.writeFile('02.txt','大家好，我是node.js',function (error) {
    if(error){
        console.log('文件写入失败');
    }
})