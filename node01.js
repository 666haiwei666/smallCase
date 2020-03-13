var http=require('http');
var sever=http.createServer();
sever.on('request',function () {
    console.log('收到客户端的请求了');
});
sever.listen('3000',function () {
    console.log('服务端启动成功了');
})