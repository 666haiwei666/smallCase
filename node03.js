var fs=require('fs');
fs.readFile('01.txt',function (error,data) {
    if(error)
    {
        console.log('文件请求失败');
    }else{
        console.log(data);
    }
})