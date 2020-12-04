const http = require('http');
const fs = require('fs');
var requests = require('requests'); 
const homefile = fs.readFileSync("home.html", "utf-8");

const replaceValue = (tempval , orgvalue) => {
    let temprature =  tempval.replace("{%tempval%}", orgvalue.main.temp);
    temprature =  temprature.replace("{%tempmin%}", orgvalue.main.temp_min);
    temprature =  temprature.replace("{%tempmax%}", orgvalue.main.temp_max);
    temprature =  temprature.replace("{%location%}", orgvalue.name);
    temprature =  temprature.replace("{%country%}", orgvalue.sys.country);
    temprature = temprature.replace("{%tempstatus%}", orgvalue.weather[0].main);

    return temprature;    
}
const server = http.createServer((req , res) => {
    if(req.url=="/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Theix&appid=d31b2f1f954605b7f41399c3058e1851')
        .on('data', (chunk) => {
        const objdata  = JSON.parse(chunk);
        const arraydata = [objdata];
        // console.log(arraydata[0].main.temp);

        const realvalue = arraydata.map(val => replaceValue(homefile, val)).join();
        res.write(realvalue);
        console.log(realvalue);
    })
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
});
    }else if(req.url=="/Surat"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Surat&appid=d31b2f1f954605b7f41399c3058e1851')
        .on('data', (chunk) => {
        const objdata  = JSON.parse(chunk);
        const arraydata = [objdata];
        // console.log(arraydata[0].main.temp);

        const realvalue = arraydata.map(val => replaceValue(homefile, val)).join();
        res.write(realvalue);
        console.log(realvalue);
    })
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
});
    }else if(req.url=="/ahemdabad"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Mahemd%C4%81v%C4%81d&appid=d31b2f1f954605b7f41399c3058e1851')
        .on('data', (chunk) => {
        const objdata  = JSON.parse(chunk);
        const arraydata = [objdata];
        // console.log(arraydata[0].main.temp);

        const realvalue = arraydata.map(val => replaceValue(homefile, val)).join();
        res.write(realvalue);
        console.log(realvalue);
    })
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
});
    }else if(req.url=="/veraval"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Ver%C4%81val&appid=d31b2f1f954605b7f41399c3058e1851')
        .on('data', (chunk) => {
        const objdata  = JSON.parse(chunk);
        const arraydata = [objdata];
        // console.log(arraydata[0].main.temp);

        const realvalue = arraydata.map(val => replaceValue(homefile, val)).join();
        res.write(realvalue);
        console.log(realvalue);
    })
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
});
    }
});

server.listen(3000);