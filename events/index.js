const eventEmitter = require('events');
const event = new eventEmitter();

event.on("saymyname", () => {
    console.log("your name is hina");
});
event.on("saymyname", () => {
    console.log("your name is hina,mmmmmm");
});
event.on("saymyname", () => {
    console.log("your name is hinassssssssssss");
});
event.on("saymyname", () => {
    console.log("your name is hinahhhhhhhhhh");
});
event.emit("saymyname");

event.on("checkpage", (sc , msg) => {
        console.log(`status code is ${sc} and messga eis ${msg}`);
});

event.emit("checkpage", 200 , 'ok');


