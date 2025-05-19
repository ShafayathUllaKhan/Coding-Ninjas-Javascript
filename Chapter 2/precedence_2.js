// Operator precedence

let m1 = 20;
let m2 = 15;
let m3 = 10;

let avg = m1 + m2 + m3 / 3;
console.log(avg); // 15 should be the answer but you will get 38.333333333333336
// that is because when we use more than 1 operator then it follows the 
// precedence table


let avg1 = (m1 + m2 + m3) / 3;
console.log(avg1);// 15

