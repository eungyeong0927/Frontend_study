// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
console.log(num6);

// 3. 복합 대입 연산자 (산술+대입)
let num7 = 10;

num7 += 20; //num7 = num7 + 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위 연산 (해당 라인부터 적용)
num8++; // 후위 연산 (다음 라인부터 적용)
console.log(num8);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
// ==> 다른 프로그래밍 언어에서는 ==, != 로 사용을 하지만 자바스크립트에서는 자료형까지의 비교를 위해 ===, !== 사용
let comp1_1 = 1 == "1"; // true, 자료형까지 비교 X
let comp2_2 = 1 === "1"; // false, 자료형까지 비교 O

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
