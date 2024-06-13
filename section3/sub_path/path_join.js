// path.join() : 경로 결합
// - 받은 인자들을 합쳐 상대경로로 리턴
// - 파일 경로를 생성할 때 유용
// - ..을 합치면 한 단계 상위 경로로 인식
// - /를 상대경로로 처리

const path = require("path");

console.log(path.join("a", "b", "index.html"));
// a\b\index.html
console.log(path.join(__dirname, "/crr", "/temp", "name", "dir", ".."));
// C:\Users\82103\Documents\github\Frontend_study\section3\path\crr\temp\name
console.log(path.join("/foo/bar", "/tmp/file/"));
// \foo\bar\tmp\file\
