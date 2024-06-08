// 배열 선언
let numbers = [1, 2, 3];
const numbers2 = [1, 2, 3, 4, 5];
numbers.foo = "안녕";
/*
// 기본 for문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} // 결과 2 4 6 8 10

for (let key in numbers) {
    console.log(numbers[key]);
} // 결과 1 2 3 4 5

for (let keys of numbers) {
    console.log(keys);
} // 결과 1 2 3 4 5
*/
console.log("=====여기서부터 반복 메서드=====");

// forEach() 메소드 사용 예제, 반환값 X, 기존 배열에서 수행만
let doubledNumbers1 = numbers.forEach((num) => {
    return num * 2;
});
console.log(doubledNumbers1); // undefined 출력

// map() 메소드 사용 예제, 반환값 O, 새로운 객체 생성
const doubledNumbers2 = numbers.map((num) => {
    return num * 2;
});
console.log(doubledNumbers2); //

console.log("==================================");

// forEach(), map() 모두 동일하게 인수 3개 받음
numbers.forEach((num, index, arr) => {
    console.log(num, index, arr);
});

numbers.map((num, index, arr) => {
    console.log(num, index, arr);
});

/* 결과 동일
배열 0 (3) ['배열', '모음', '변수입니당', foo: '안녕']
모음 1 (3) ['배열', '모음', '변수입니당', foo: '안녕']
변수입니당 2 (3) ['배열', '모음', '변수입니당', foo: '안녕']
*/

console.log("==================================");

// 배열에서 for...in을 쓰면 원치 않는 결과가 출력될 수 있음
// for of는 배열에서 쓰는 것이 적함, for in은 객체에서 쓰는 것이 적함
// for in은 기본적으로 key값, 인덱스값을 반환
//Object.prototype.obj = function () {};
//Array.prototype.arr = function () {};
/*
const arr3 = ["배열", "모음", "변수"];
arr3.foo = "안녕";

for (let i = 0; i < 3; i++) {
    console.log(arr3[i]);
} // 결과 : 배열, 모음, 변수

for (let i in arr3) {
    console.log(i); // 결과: 0, 1, 2, "foo", "arr", "obj"
}

for (let i of arr3) {
    console.log(i); // 결과: "배열", "모음", "변수"
}

console.log("==================================");

let obj = { a: "가", b: "나", c: "다" };
for (let key in obj) {
    console.log(key, obj[key]);
}

for (let key of obj) {
    console.log(key);
}
*/
