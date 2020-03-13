var http=require('http');
var sever=http.createServer();
sever.on('request',function (req,res) {
    if(req.url=='/')
    {
        res.end('/')
    }else if(req.url=='/xxxx'){
        res.end('hello')
    }else if(req.url=='/ffff'){
        res.end('hello world')
    }else{
        res.end('你找的文件丢失了')
    }
});
sever.listen(3000,function () {
    console.log('服务端启动成功');
})