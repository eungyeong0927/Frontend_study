// fs.unlink() : 파일삭제
const fs = require("fs");
fs.unlink("mynewfile2.txt", function () {
    console.log("파일삭제 완료");
});
