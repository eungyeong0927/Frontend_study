//math 모듈

// commonJS 방식
/*
module.exports = {
    // add: add,
    // sub: sub,
    // 키 값, 밸류 값의 이름이 같을 경우 아래와 같이 생략 가능
    add,
    sub,
};
*/
/////////////////////////////////////////////////////////////////////

// ESM 방식
export default function multiply(a, b) {
    return a * b;
}

export function add(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a - b;
}

/*
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
export { add, sub };
*/
