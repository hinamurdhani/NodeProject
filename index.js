const fs = require('fs');
// fs.writeFileSync("read.txt", "hi how are you read.txt");
// fs.writeFileSync("read.txt", "hi how are you copy of read.txt");
// fs.appendFileSync("read.txt"," my self hina murdhani")

// const data = fs.readFileSync("read.txt")
// console.log(data.toString())

// fs.renameSync("read.txt", "readw.txt")

// fs.mkdirSync("hina");
fs.writeFileSync("./hina/bio.txt","hey there is my bio");
fs.appendFileSync("./hina/bio.txt","I have appended something about my self");
const data = fs.readFileSync("./hina/bio.txt","utf-8");
console.log(data)
fs.renameSync("./hina/bio.txt", "./hina/mybio.txt")

// fs.rmdirSync("hina");
// for deleting the file
 fs.unlinkSync("./hina/mybio.txt")
//for deleting the dir
fs.rmdirSync("hina");
