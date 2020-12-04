const http = require('http');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/userAPI.json`,"utf-8")
    const objData = JSON.parse(data);

const server = http.createServer((req , res) => {
    // console.log(req.url);
    if(req.url == "/"){
        res.end("hello from home sode...");
    }else if(req.url == "/contact"){
        res.end("hello from contact sode...");
    }
    else if(req.url == "/userapi"){
            res.writeHead(200, {"Content-type": "application/json"})    
            res.end(objData.job[0].company_name);
            // res.end(data);
            console.log(data);
        
    }else{
        res.writeHead(400, { "Content-type" : "text/html"});
        res.end("<h1>Page doent exits.</h1>");
        
    }
    
});

server.listen(8000, () => {

    console.log("listinign to the port 800");
});