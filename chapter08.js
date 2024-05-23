// 1. null 병합 연산자
// => 존재하는 값을 찾아내는 기능
// => null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
console.log(var4);
console.log(var5);

let var6 = var2 ?? var3; // 둘 다  null 값이 아닌 경우 앞의 변수 (var2)가 대입됨
console.log(var6);

let userName = "이정환";
let userNickName = "윈터우드";
let diaplqyName = userName ?? userNickName;

// 2. typeof 연산자
// => 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let car7 = 1;
var7 = "hello";
var7 = true; // 자바스크립트는 자료형이 고정되어 있지 않음

let t1 = typeof var7;
console.log(t1); // 문자열로 boolean 반환

// 3. 삼항 연산자
// => 항을 3개 사용하는 연산자
// => 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환

let var8 = 10;

// 요구사항 : 변수 res에  var8의 값이 [짝수 -> "짝", 홀수 -> "홀"] 저장
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
