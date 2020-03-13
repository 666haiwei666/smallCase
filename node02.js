var http=require('http');
var sever=http.createServer();
sever.on('request',function (req,error) {
    var url=req.url;
    console.log('客户端请求的路径是'+url);
});
sever.listen('3000',function () {
    console.log('服务端启动了');
})