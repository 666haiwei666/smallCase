var http=require('http');
var sever=http.createServer();
sever.on('request',function (req,res) {
    res.setHeader('Content-Type','text/plain;charset=UTF-8');
    res.end('你好，我的前端世界，等我来拥抱你');
});
sever.listen(3000,function() {
    console.log('收到客户端的请求了');
})