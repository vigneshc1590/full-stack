const http = require('http');

const fs = require('fs')




const server = http.createServer((req,res)=>{
    //res.setHeader('content-type','text/html',"I am the header dad deii");
    const url=req.url;

       if(url=='/message') {
        res.setHeader('Location','/');

        req.on('data',(chunk)=>{

            console.log(chunk);

        })
        fs.writeFileSync('welcome.txt','this is my first fs module expirement\n');

        res.statusCode = 302;
        res.write('<html>');
        res.write('<head><title>NodeJs</title></head>');
        res.write('<body><h2>Welcome to the node js. This is my first node.js server</h2></body>');
        res.write('</html>');

        return res.end();

       }
        


    if(url=='/'){
        res.write('<html>')
        res.write('<body><form id="form" action="/message" method ="POST"><input type="text" name="username"><input  type="submit" value="send"></form></body>')
        res.write('</html>')
    }
   
    res.end();
});

server.listen(3000,() => {
  console.log('Server running at http://localhost:3000/');
});