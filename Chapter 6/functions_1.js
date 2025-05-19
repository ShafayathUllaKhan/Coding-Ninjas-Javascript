// Function in js

// function declaration
function sum(a,b){
    return a + b;
}

const sum1 = sum(5,6);
console.log(sum1);

// Function expression
//if you change to var then also you will
//   get error because var will be treated as variable
const sum2 = function (a,b){
    return a + b;
}

console.log(sum2(5,6));

// function expression cannot be hoisted

// example

//console.log(sum3(5,6)); // Uncaught ReferenceError: Cannot access 'sum3' before initialization
  //  at functions.js:24:13

const sum3 = function (a,b){
    return a + b;
}

// arrow function

var product = (num1,num2)=>{
    return num1 * num2;
}

console.log(product(2,4));

// IIFE(immediatelly invoked function expression)

(function (a,b){
    console.log(a ** b);
})(3,3);



const user = (function () {
  const userData = {
    userName: 'John',
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();

console.log(user);//{getName: ƒ, updateAge: ƒ}
console.log(user.userData); // undefined
user.getName();// John
user.updateAge(3);// 23

console.log('********************');

//pure functions

// means a function should just take input and retur the answer by using only input values
// should not have console, not change any value which is not there
// in function and should not give answer using some other variable rather than input values

function calculate(num1, num2) {
  return num1 * num2;
}

console.log(calculate(4, 6));// pure function

const discount = 25;

function calcDis(price) {// impure function
  discount = discount - 5;
  return price - discount;
}

// callback function

function greet(wish){
    console.log(`${wish()}, welcome to javascript`);
}

function sayHi(){
    return "hi";
}


function sayHello(){
    return "hello";
}


function goodMorning(){
    return "goodmorning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);


// Function returning a function

function greet(message){
    return function (wishes){
        console.log(`${wishes}, ${message}`)
    };
}

const greeting = greet('I hope you are doing well');
greeting('Hello');// Hello, I hope you are doing well

greet('Welcome to the session')('Hi');// Hi, Welcome to the session


//  Higher order function
// function which accept a function as a argument
//  function returning a function 

const inputs = [2,3,4,5,7,8,9,10];

function calculate1(input, operation) {
  const output = [];
  for (let number of input) {
    output.push(operation(number));
  }
  return output;
}

function cubic(number) {
  return number * number * number;
}

function square(number) {
  return number * number;
}

const cube3 = calculate1(inputs, cubic);
console.log(cube3);//(8) [8, 27, 64, 125, 343, 512, 729, 1000]
const square2 = calculate1(inputs, square);
console.log(square2);// (8) [4, 9, 16, 25, 49, 64, 81, 100]

// currying in js

function add1(a, b, c){
    return a + b + c ;
}
console.log(add1(10,20,30));


function add2(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

console.log(add2(10)(20)(30));


// js higher order function
// map

const values = [2,3,4,5,6,7];

const updated_values = values.map(function (currentelem,indexnumber,arr){
    return currentelem * currentelem;

})

console.log(values);
console.log(updated_values);

const updated_values1 = values.map((currentelem,indexnumber,arr)=> currentelem * currentelem);
console.log(updated_values1);

// reduce 
// note if accumalator is not given then the index will start from 1
const values1 = [2,3,2,3];
const updated_values2 = values1.reduce((accumulator,currentelem,indexnumber,arr)=>{
                console.log(accumulator , currentelem, indexnumber);
                return accumulator + currentelem; 
})

console.log(updated_values2);

// filter

const updated_values3 = values1.filter((currentelem,indexnumber,arr)=>{
    return currentelem < 3;
});

console.log(updated_values3);


// find and findIndex
// find just return a value not array
//  and it just return you on single number 
// thats the difference from filter method

const updated_values4 = values1.find((currentelem,indexnumber,arr)=>{
    return currentelem == 3;
});
console.log(updated_values4);// 3

// find index
// find index just return a value not array
//  and it just return you on single number 
// thats the difference from filter method

const updated_values5 = values1.findIndex((currentelem,indexnumber,arr)=>{
    return currentelem < 3;
});
console.log(updated_values5);// 0


// this keyword
//this is pointer to the object
'use strict'

console.log(this); // window object

var user1 = 'john';

console.log(window.user1);

function checkThis(){
    console.log(this); // window if you use strict mode you will get undefined

}

checkThis();

const checkArrow = () =>{
    console.log(this); 
}

checkArrow();// window

const user2 = {
    username: "john",
    userage: 12,
    work:function(){
        console.log(this);
    }
}

user2.work();

const user_3 ={
    username : 'lisa'
}

user_3.work = user2.work;

user_3.work(); // it will point to current object lisa

