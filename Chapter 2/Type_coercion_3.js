// Type Coercion

console.log(5 + 5); //10


let num = '5' + 5; // number is changed to string
console.log('5' + 5); // 55 and this is string
console.log(typeof num); // String

let fullName = 'shafayath '+'Ulla Khan';
console.log(fullName);// shafayath Ulla Khan

let sub = '55' - 10;// string is changed to number
console.log(sub);// 45 and this is number
console.log(typeof sub); // Number


console.log('4' * 2); // 8 and this is number 
//and string is changed to number


console.log('4' / 2);  // 2 and this is number
//and string is changed to number

//this is implicit conversion is called as type coercion


console.log(true + 1);// 2
console.log(true - 1);// 0
console.log(true - "1");// 0
console.log(true + "1");//true1