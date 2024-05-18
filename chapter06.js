// 1. 묵시적 형변환
// ==> 자바스크립트 엔진이 알아서 형변환을 하는 것

let num = 10;
let str = "20";

const result = num + str;
// 숫자 + 문자열

console.log(result);
// ==> 형변환으로 문자열 + 문자열이 됨

// 2. 명시적 형변환
// ==> 프로그램 내장함수 등을 이요해서 직접 형 변환을 명시

// 2-1. 문자열을 숫자로 형변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
// ==> parseInt()는 문자열이 앞에 있을 경우 형변환이 이루어지지 않음 / ex) let str2 ="abc10개"
console.log(10 + strToNum2);

// 2-2. 숫자를 문자열로 형변환
let num1 = 20;
let numToSrt1 = String(num1);
console.log(numToSrt1 + "입니다");
