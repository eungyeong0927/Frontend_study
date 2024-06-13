// 비동기식 => 파일 읽기 완료 후에 test.txt 파일 내용 출력
let fs = require("fs");
fs.readFile("test.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log("1. " + data); // test.txt 내용 출력
});
console.log("1. 파일 읽기 완료");

console.log("======================================");

// 동기식
const data = fs.readFileSync("./test.txt", "utf-8");
console.log("2. " + data);
console.log("2. 파일 읽기 완료");

console.log("======================================");

// promise await 사용
const fs2 = require("fs").promises;

async function readFile() {
    try {
        const data = await fs2.readFile("./test.txt", "utf-8");
        console.log("3. " + data);
    } catch (err) {
        console.error(err);
    }
    console.log("3. 파일 읽기 완료");
}

readFile();

console.log("======================================");
