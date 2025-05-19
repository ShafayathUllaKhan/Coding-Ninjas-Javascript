// Type Conversion

// Convert to String
// String();
// Note string is white and the number is purple
//and the boolean is purple and null and undefined is light white
console.log(String(100));
console.log(100);
console.log(String(true));
console.log(null);
console.log(String(null));
console.log(undefined);
console.log(String(undefined));

//Note String function calls toString only and the difference is syntax
// and null and undefined cannot change to string useing toString to understand on the upper level
// toString();
console.log(100);
console.log((100).toString());
// console.log((null).toString()); // Type_Conversion_4.js:20 Uncaught TypeError: Cannot read properties of null (reading 'toString')
// console.log((undefined).toString());// Type_Conversion_4.js:20 Uncaught TypeError: Cannot read properties of undefined (reading 'toString')

// Convert to Number
// Number();
console.log("***NUMBER***");

console.log(Number('25')); // 25 with purple colour
console.log(Number("value"));// NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Unary + Operator --- works on Variables

let a = "123";
console.log(+a);// 123
let b = "123shafayath";
console.log(+b);// NaN


// parseFloat();
console.log(parseFloat("12345.45f"));// 12345.45
console.log(parseFloat("f12345.45"));// NaN

// parseInt();
console.log(parseInt("12345f"));// 12345 in number function this will give you NAN that the difference between in number and parsint
console.log(parseInt("f12345f"));//result -->Nan explanation --> if there is string in starting then the result will be Nan
console.log(parseInt("12345.45f"));//12345 because this is parse int


// Convert to Boolean
// Boolean();

console.log(Boolean(0));// False
console.log(Boolean(" "));// True
console.log(Boolean(""));// False
console.log(Boolean(null));// False
console.log(Boolean(undefined));// False