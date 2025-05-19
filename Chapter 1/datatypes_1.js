// DataType
// 1. Objects
// 2. Primitive DataTypes

// Primitive DataTypes


// Number (64 bit)

let num = 10;
console.log(typeof(num));

// String
const firstName = "shafayath";
const lastname = 'ulla Khan';
const nickName = `Tom`;

console.log(typeof(firstName));
console.log(typeof(lastname));
console.log(typeof(nickName));

// Boolean
let bool = false;
console.log(typeof(bool));

// Undefined
let a;
console.log(typeof a);
console.log(a);

//Null
let b = null;
console.log(typeof(b)); // this is a bug it gives you object
console.log(b);

// Symbol(ES6/2015)


// BigInt(ES2020) more than 64 bits

let num1 = 10n;
console.log(typeof num1);


// Interesting things

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE * 10);

let num3 = Infinity;

console.log(12/0);// Infinity
console.log(188/Infinity);