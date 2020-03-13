var fs=require('fs');
fs.readFile('01.txt',function (error,data) {
    console.log(error ? '读取文件失败' : data.toString());
})