var http=require('http');
var fs=require('fs')
var server=http.createServer();
server.on('request',function (res,req) {
    if(req.url='/')
    {
        req.setHeader('Content-Type','text/plain;charset=UTF-8');
        fs.readFile('02.txt',function (error,data) {
            req.end(error ? '文件读取失败' : data);
        })
    }
});
server.listen(3000,function () {
    console.log('服务端启动成功');
})