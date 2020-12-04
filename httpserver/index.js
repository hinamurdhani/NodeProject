const http = require('http');
const server = http.createServer((req , res) => {
    // console.log(req.url);
    if(req.url == "/"){
        res.end("hello from home sode...");
    }else if(req.url == "/contact"){
        res.end("hello from contact sode...");
    }else{
        res.writeHead(400, { "Content-type" : "text/html"});
        res.end("<h1>Page doent exits.</h1>");
        
    }
    
});
server.listen(8000, () => {

    console.log("listinign to the port 800");
});