const fs  = require('fs');
const http = require('http');
const server = http.createServer();



server.on('request', (req , res) => {
    // fs.readFile("input.txt", (err , data) => {

    //     // simple way to read the file it will load the whole data and then load it 
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    //3rd way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    // rstream.on("data" , (chunkdata) => {
    //         res.write(chunkdata);
    // });
    // rstream.on("end" , () => {
    //     res.end();
    // });
    // rstream.on("error", (error) => {
    //     console.log(error);
    //     res.end("file not found");
    // })
});

server.listen(8000);