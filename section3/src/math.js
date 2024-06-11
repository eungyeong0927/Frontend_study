//math 모듈

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

/*
module.exports = {
    // add: add,
    // sub: sub,
    // 키 값, 밸류 값의 이름이 같을 경우 아래와 같이 생략 가능
    add,
    sub,
};
*/

export { add, sub };
