var http=require('http');
var sever=http.createServer();
sever.on('request',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=UTF-8');
    res.end('<p>前端，前端，前端</p>')
});
sever.listen(3000,function () {
    console.log('服务器启动成功');
})