const fs = require('fs');

console.log(process.cwd());
console.log(fs.readdirSync(process.cwd()))
console.log(fs.readdirSync(process.cwd()+'/.git'))
