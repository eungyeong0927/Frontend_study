let fs = require("fs");

// 비동기식
fs.writeFile("mynewfile1.txt", "writeFile 테스트 1", (err, files) => {
    if (err) {
        throw err;
    }
    fs.readFile("mynewfile1.txt", "utf8", function (err, data) {
        console.log(data);
    });
    console.log("파일이 생성됨");
});

console.log("=======================================");

// 동기식
fs.writeFileSync("./mynewfile2.txt", "writeFile 테스트 2");
var data = fs.readFileSync("./mynewfile2.txt", "utf8");
console.log(data);
console.log("파일이 생성됨");

console.log("=======================================");
