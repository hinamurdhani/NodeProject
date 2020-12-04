const fs = require('fs');
fs.writeFile("read.txt","hello welocme to a async prgm", 
(err) => {
    console.log("filr created");
    console.log(err);
});

fs.appendFile("read.txt","I have appended some extra data", 
(err) => {
console.log("Task completed");
})

fs.readFile("read.txt","utf-8", (err,data) => {
    console.log(data)
})