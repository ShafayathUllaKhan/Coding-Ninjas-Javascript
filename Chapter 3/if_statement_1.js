// Conditionals in JS

// if Statement

// Print number is even if number is even

let num = 10;//prompt("Please enter the number");
if(num % 2 == 0){
    console.log("Number is even");
}
console.log('Outside if');

// if else if statement
console.log("if else if statement");

// Determine the quarter based on the month

let month = prompt("Enter the month number.");
console.log(typeof month);
if( month >= 1 && month <=3){
    console.log("First Quarter");
}
else if(month >= 4 && month<=6){
    console.log("Second Quarter");
}
else if(month >= 7 && month<=9){
    console.log("Third Quarter");
}
else if(month >= 10 && month <= 12){
     console.log("Fourth Quarter");
}else{
    console.log("Invalid month.");
}

// Email Verification
// Input an email
// Length of the email > 11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

const email = prompt("Enter the email address");

const emaillen = email.length;
console.log(emaillen);

const dotIndex = email.lastIndexOf(".");

const atIndex = email.lastIndexOf("@");
const lastIndex = emaillen -1;
if(emaillen < 11 || 
    lastIndex - dotIndex < 2 || 
    lastIndex - dotIndex > 3
    || dotIndex - atIndex < 3)
    {

        console.log('Invalid Email');
}

// Ternary Operator
let num1 = 10;
let num2 = 19;
let greater = num1 > num2 ? num1 : num2;

console.log('Greater number is ' + greater);

// Prime or not

// itself and 1

let primenum = 5;
let isPrime = true;
for(let i=2; i<num;i++){
    if(num % i == 0){
       isPrime = false;
       break;
    }
}

if(isPrime){
    console.log('Prime');
}else{
    console.log('Not Prime');
}

// Math Random

let randomNum = Math.round(Math.random() * 100);
console.log(randomNum);// values will be under 100