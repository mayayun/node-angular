var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   var i = pathname.lastIndexOf('.');
   var suffix = pathname.substr( i+1, pathname.length);
   console.log(suffix);
   // 输出请求的文件名
   //console.log("Request for " + pathname + " received.");
   if(suffix=="html"||suffix=="css"||suffix=="js"){
      // 从文件系统中读取请求的文件内容
      fs.readFile(pathname.substr(1), function (err, data) {
         if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            response.writeHead(404, {'Content-Type': 'text/html'});
         }else{
            //获取后缀名
            if(suffix=="html"||suffix=="css"){
               response.writeHead(200,{'Content-type':"text/"+suffix});    //通过后缀名指定mime类型
            }else if(suffix=="js"){
               response.writeHead(200,{'Content-type':"application/javascript"});

            }
            // 响应文件内容
            response.write(data.toString());
         }
         response.end();
      }); 
   }else{
      var content =  fs.readFileSync(pathname.substr(1),"binary");   //格式必须为 binary 否则会出错
      response.write(content,"binary");
      response.end();
   }
   //  发送响应数据
   //response.end();
     
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');