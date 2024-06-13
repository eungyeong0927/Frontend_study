const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>처음으로 서버 열기</h1>");
    res.end("<hr>응답 종료");
}).listen(8000, () => {
    console.log("8000번 서버 연결");
});
