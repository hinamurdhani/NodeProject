const name = 'hina';
console.log(name);

// when we run the code node put the code in wrapper function which makes it private
(function(exports, require, module, __filename, __dirname){
    const name = 'hina';
    console.log(name);
});

console.log(__filename);
console.log(__dirname);