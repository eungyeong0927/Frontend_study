// appendFile() : 내용 추가, 기존 파일을 전제

let fs = require("fs");

// 비동기식
fs.appendFile("mynewfile1.txt", " appendFile로 내용 추가 ", function (err) {
    if (err) throw err;
    fs.readFile("mynewfile1.txt", "utf8", function (err, data) {
        console.log("1. " + data);
    });
    console.log("1. 파일이 생성됨");
});

// 동기식
fs.appendFileSync("mynewfile1.txt", " 2appendFile로 내용 추가2 ");
let data = fs.readFileSync("mynewfile1.txt", "utf8");
console.log("2. " + data);
console.log("2. 파일이 생성됨2");

// 이렇게 되면 동기식인 appendFileSync의 두 콘솔이 먼저 출력되고
// 그 이후에 비동기식 appendFile이 출력되는데 그 안의 readFile 또한 비동기식이기 때문에 파일이 실행됨 콘솔 후에 data 콘솔이 출력됨
// 만약 appendFile 안에 readFile=>readFileSync 쓴다면 data 출력 후에 파일이 생성됨이 차례대로 출력됨

// appednFile 안에 readFile을 썼을 때
/*
2. writeFile 테스트 1 2appendFile로 내용 추가2 
2. 파일이 생성됨2
1. 파일이 생성됨
1. writeFile 테스트 1 2appendFile로 내용 추가2  appendFile로 내용 추가 
*/

// appednFile 안에 readFileSync을 썼을 때
/*
2. writeFile 테스트 1 2appendFile로 내용 추가2 
2. 파일이 생성됨2
1. writeFile 테스트 1 2appendFile로 내용 추가2  appendFile로 내용 추가 
1. 파일이 생성됨
*/
