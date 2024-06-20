const express = require("express");
const multer = require("multer"); // multer 모듈 불러오기
const path = require("path");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/public"));
app.use("/image", express.static(__dirname + "/uploads"));
// const upload = multer({
//     dest: 'uploads/',
// });
const uploadDetail = multer({
    storage: multer.diskStorage({
        //multer.disStorage 방식을 사용하여 파일을 저장하겠다
        destination(req, file, done) {
            // destination 콜백 함수는 파일을 저장할 경로를 설정함
            done(null, "uploads/"); // 파일을 저장할 경로
            // 첫 번째 인자는 에러 발생시 처리, 두번째 인자는 "uploads/" 디렉토리를 설정한다 하는 의미
        },
        filename(req, file, done) {
            // filename 콜백 함수는 저장할 파일의 이름을 설정함
            const ext = path.extname(file.originalname); // 확장자 추출
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
            // path.basename(file.originalname, ext)처럼 뒤에 옵션 값을 주게 되면 뒤의 확장자를 제거할 수 있다.
        },
    }),
    // destination, filename의 매개변수 중 req는 요청을 의미, req.body 가능!
    // file은 file 그 자체를 의미, 아래 app.post에서는 req.file.fieldename으로 추출해야했지만
    // 여기서는 file.fieldname으로 직접 접근 가능
    limits: { fileSize: 5 * 1024 * 1024 }, // 업로드 크기 제한
});

// multer객체.single(): 하나의 파일을 업로드
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, req.file 객체 생성
app.post("/fileupload", uploadDetail.single("userfile"), (req, res) => {
    // upload.single("") 의 이름은 input file의 name 속성 값
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보
    // {
    //     fieldname: 'userfile',
    //     originalname: '6ì\x9B\x94 ì\x9B\x94í\x8E\x98ì\x9D´í\x8D¼.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'uploads/',
    //     filename: '9a4440e4b1c09a6271a1027abdd64030',  path: 'uploads\\9a4440e4b1c09a6271a1027abdd64030',
    //     size: 3358858
    //   }

    // res.send('Success upload!');
    res.render("uploaded", { title: req.body.title, src: req.file.filename });

    // 파일 탐색기 > uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
});

// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
app.post("/fileupload/array", uploadDetail.array("banana"), (req, res) => {
    console.log(req.body); // { title: '파일 2개 업로드 중!!' }
    console.log(req.files); // [ {}, {}, ... ] 배열 형태로 각 파일 정보를 저장

    res.send("Success Upload!! (multiple)");
});

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
app.post("/fileupload/fields", uploadDetail.fields([{ name: "apple" }, { name: "mango" }]), (req, res) => {
    console.log(req.body); // { title1: '개3', title2: '개2' }
    console.log(req.files); // { kiwi: [ {}, ... ], ornage: [ {}, ... ] }

    res.send("Success Upload!! (multiple2)");
});

// 동적 폼 업로드
app.post("/dynamicFile", uploadDetail.single("thumbnail"), (req, res) => {
    res.send(req.file);
});
/*
    1. 업로드한 파일이 "/dynamicFile" 경로와 맵핑
    2. uploadDetail.single("thumbnail") (= 미들웨어)를 만나며 multer 설정에 의해 uploads 파일에 업로드 되고 
    3. (req, res) => {res.send(req.file);} (= 라우터 미들웨어)를 만나서 req의 파일 정보를 클라이언트한테 보냄 
*/

app.get("/", function (req, res) {
    res.render("index", { title: "파일 업로드를 배워보자!!!" });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
