let http = require("http");
let url = require("url");
let fs = require("fs");

// 127.0.0.1:3000포트로 접속해서 winter.html, summer.html을 브라우저에 띄우기
http.createServer((req, res) => {
    // req에 사용자가 원하는 파일
    let url_query = url.parse(req.url, true); // true는 기본값으로 줘야됨
    let filename = "." + url_query.pathname;
    // http://127.0.0.1:3000/summer.html로 들어간다 가정할 때
    // url_query.pathname = /summer.html

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
            return res.end("찾는 파일이 없습니다");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data); // html 파일 데이터를 보여줌
        res.write("url_query: " + url_query.pathname);
        res.write("filename: " + filename);
        return res.end();
    });
}).listen(3000, () => {
    console.log("3000번 포트에서 서버 실행중");
});
