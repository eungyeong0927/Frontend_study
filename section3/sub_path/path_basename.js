// path.basename() : 파일/디렉토리 이름 얻기

let path = require("path");

console.log(path.basename(__dirname));
// path
console.log(path.basename(__filename));
// index.js
