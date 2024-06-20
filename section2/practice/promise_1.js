function call1(name) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            // console.log(name);
            res(name);
        }, 1000);
    });
}

function back1(cb) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            // console.log("back");
            res("back");
        }, 1000);
    });
}

function hell1(cb) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res("callback hell");
        }, 1000);
    });
}

// promise 기본 then 사용
const call = new call1("Kim");

call.then((name) => {
    console.log(name + "반가워");
    return back1(name);
})
    .then((txt) => {
        console.log(txt + "을 실행했구나");
        return hell1(txt);
    })
    .then((message) => {
        console.log("여기는" + message);
    });

// async, await 사용
async function exec() {
    let name = await call1("Kim");
    console.log(name + "반가워");
    let back = await back1("back");
    console.log(back + "을 실행했구나");
    let msg = await hell1("callback hell");
    console.log("여기는" + msg);
}

exec();
