const os = require('os');
console.log(os.arch());
const mem = os.freemem();

console.log(`${mem / 1024 /1024 / 1024}`);
const totmem = os.totalmem();

console.log(`${totmem / 1024 /1024 / 1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());