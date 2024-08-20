const fs = require('fs');

var data = fs.readFileSync("test1.txt");
console.log(data.toString());

fs.writeFileSync("file2.txt" ,"this is file 2");
fs.appendFileSync("file2.txt", "added more contet")
