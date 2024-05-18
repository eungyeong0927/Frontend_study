// 1. 변수
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "1999.09.27";
// birth="127";
console.log(birth);

// 3. 변수
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드 (변수명만 보고 어떤 걸 알려주려는지 알 수 있도록)
let salesCount = 1;
let refundCount = 1;
let totalSalesCounst = salesCount - refundCount;
