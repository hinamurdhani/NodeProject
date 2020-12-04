const fs = require('fs');
const bio = {
    name : "hina",
    fnme : "murdhani",
    age : "22"
};
console.log(bio.age);

const jsondata = JSON.stringify(bio);
console.log(jsondata);

// const objdata = JSON.parse(jsondata);
// console.log(objdata);

fs.writeFile('jsondata.json', jsondata , (err) => {
    console.log("file created");

});
fs.readFile("jsondata.json","utf-8", (err , data) => {
    console.log(data);
    const orgdata = JSON.parse(data);
    console.log(orgdata);
});