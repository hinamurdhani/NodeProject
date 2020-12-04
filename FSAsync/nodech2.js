const fs = require('fs');
// fs.mkdir("hina", (err) =>{
//     console.log("folder created");
// })
fs.writeFile("./hina/readasy.txt","Hey I am read file with async", (err) => 
{
    console.log("file created");
});

fs.appendFile("./hina/readasy.txt"," append data Hey I am read file with async ", (err) =>
{
    console.log("dataa appended");
});

fs.readFile("./hina/readasy.txt","utf-8",(err , data) => {
    console.log(data)
})


fs.rename("./hina/readasy.txt","./hina/readasyrename.txt", (err) => {
    console.log("rename");
});


// to delete the file
fs.unlink("./hina/readasyrename.txt", (err) => {
console.log("file deleted");
})

//to delete folde
fs.rmdir("./hina", (err) => {
    console.log("dir deleted");
})

