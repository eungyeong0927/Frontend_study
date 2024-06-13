// 파일 이름 변경
let fs = require("fs");
// fs.rename("mynewfile1.txt", "renamefile2.txt", (err) => {
//     if (err) throw err;
//     console.log("파일 이름 변경 완료");
// });

fs.renameSync("renamefile2.txt", "mynewfile1.txt");
