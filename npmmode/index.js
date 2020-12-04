const chalk = require("chalk");
const validator = require('validator');
console.log(chalk.red.underline.inverse("hello world"));
const res = validator.isEmail("hina@gmail.c");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
