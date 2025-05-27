// Operators in js

// 1. Assignment Operator (=)
let a = 10;
let b = a;
let c = a = 20;

// console.log(a); // 20
// console.log(b); // 10
// console.log(c); // 20


// 2. Arithematic Operators (+, -, *, /, %)

console.log(10 + 2); // 12
console.log(10 - 2); // 8
console.log(10 * 2); // 20
console.log(10 / 2); //5
console.log(10 % 2); // 0
console.log(11 % 2); // 1

// 3. More Arithematic Operators or unary operator (++, --, +, -, **)
let i = 2;
// let i = +2;
// let i = -2;
//i = i+1;
//i++;
++i;
console.log(i); // 3
console.log(i ** 3); // 8
console.log(i); //2
console.log(i); //-2


// 4. Augmented Assignment Operators
// (+=, -=, *=, /=, .......)

i = i + 3;
i += 3;

i = i - 3;
i -= 3;


i = i * 3;
i *= 3;


i = i / 3;
i /= 3;

// 5. Comparison Operator (==, !=, <, <=, >, >=, ===, !==)


console.log(5==5);//true
console.log(5==6);//false
console.log(5!=6);//true
console.log(5!=5);//false
console.log(5<5);// false
console.log(5<=6);// true
console.log(5>5);// false
console.log(5>=6);// false
console.log(6>=6);// true

console.log('5' == 5); //true this coersion some where it is changing to str to num or num to str
console.log('5' === 5); // false

console.log('5' != 5);// false this is coersion
console.log('5' !== 5);// true

// 6. Logical Operators (&&, ||, !)

let grade = 60;
let scholarship = 50;
let eligile = (grade > 60 && scholarship > 70);
console.log(eligile);

// undefined , null, NaN, 0, false,"" --> falsy values
//1 to 9, " ", true --> truety values

// Note add operator stop when it catch false value and skip the further condition
// Note add operator returns last truety value
// Note add operator returns first falsy value
console.log(3 && 1);// 1
console.log(3 && 1 && 4 && 7 && 0 && 6 && 5);// 0


// Note OR operator returns first truety value
// Note OR operator returns last falsy value
console.log(3 || 1 || 4 || 7 || 0 || 6 || 5); // 3
console.log(0 || 0 || 0 || 0 || 0 || 0 || null); // null
