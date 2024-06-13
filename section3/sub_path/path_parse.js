// path.parse() : 파일 경로를 root, dir, base, ext, name 구분

let path = require("path");

let pathjoin = path.join(__dirname, "scr", "dir", "text.txt");
let pathparse = path.parse(pathjoin);
console.log(pathparse);
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\82103\\Documents\\github\\Frontend_study\\section3\\path\\scr\\dir',
  base: 'text.txt',
  ext: '.txt',
  name: 'text'
}
*/
console.log(pathparse.root); // C:\
console.log(pathparse.dir); // C:\Users\82103\Documents\github\Frontend_study\section3\path\scr\dir
console.log(pathparse.base); // text.txt
