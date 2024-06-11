// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //Not a Number

console.log(1 * "Hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// 백틱(``)을 통해서 변수를 동적으로 문자열에 추가 가능
// 이런 문법 ==> "템플릿 리터럴 문법" 이라고 함
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(null);

// 5. Undefined Type
let none;
console.log(none);
