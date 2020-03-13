var http=require('http');
var sever=http.createServer();
sever.on('request',function (request,response) {
    console.log('客户端请求的路径是' + request.url);
    response.write('hello');
    response.end();
});
sever.listen('3000',function () {
    console.log('服务端启动成功');
})