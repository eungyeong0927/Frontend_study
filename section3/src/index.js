// commonJS 방식
// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub } = require("./math");

/////////////////////////////////////////////////////////

// ESM 방식 / package.json에  "type": "module"  추가
import mul from "./math.js";
import { add, sub } from "./math.js";
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
