// path.resolve() : 경로 조합
// - 받은 인자들를 합쳐 절대경로로 리턴
// - ..을 합치면 한 단계 상위 경로로 인식
// - 오른쪽에서 왼쪽으로 합치며 /를 만나면 절대경로로 인식해서 나머지 인자를 무시

let path = require("path");

console.log(path.resolve("a", "b", "index.html"));
// C:\Users\82103\Documents\github\Frontend_study\section3\path\a\b\index.html
console.log(path.resolve("/crr", "/temp", "name", "dir", ".."));
// C:\temp\nam
console.log(path.resolve("/foo/bar", "/tmp/file/"));
// C:\tmp\file
