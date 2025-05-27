// Default Functions

function sum(num1,num2=10){
    console.log("Sum of the numbers is : " + (num1+num2));
}

sum(10,);

// undefined
function square(num1){
    console.log(num1 * num1);
}
let a = square(5);
console.log(a);// undefined

// Arrays in JS


const historyMarks = [10,20,13,4];
console.log(historyMarks);// (4) [10,20,13,4]

const arr = new Array('Riya','Riya','Riya');
console.log(arr); // (3) ['Riya','Riya','Riya']


// array is not primetive data type its like a object in js 
// const can be changed in array as it is not premitive

const cities = ['a','b','c','d'];

console.log(cities.length);// 4

cities[2] = 'e';
console.log(cities);// (4) ['a','b','e','d']

// Methods in JS

// Adding an element

// Push and unshift returns length of array

const teams = ["CSK","RCB","MI","LSG"];
teams.push("GT");
console.log(teams);// gt will add in the end of the array
console.log(teams.length);

//Unshift
let unshift = teams.unshift("KKR");
console.log(unshift);//5
console.log(teams);// kkr will be added in the first


// Removing the element

//pop returns the removed element
let popelement = teams.pop();// remove the last element of the array
console.log(teams);// length will be decrease
console.log(popelement);

//shift returns the removed element
let shiftelement = teams.shift();//remove first element
console.log(teams);
console.log(shiftelement);

// Check the element is present or not

// indexOf()
const rcbindex = teams.indexOf("RCB");
console.log(rcbindex); // 1 gives the index of rcb


const gtindex = teams.indexOf("GT");
console.log(gtindex); // gives -1 if element is not present

// includes()
// true or false

const rcbincludes = teams.includes("RCB");
console.log(rcbincludes);// true


const gtincludes = teams.includes("GT");
console.log(gtincludes);// false

// slice() and splice()

//Slice
console.log(teams);//(4) ['CSK', 'RCB', 'MI', 'LSG']
console.log(teams.slice(2)); // (2) ['MI', 'LSG']
console.log(teams.slice(-1));// gives you last element
console.log(teams);//(4) ['CSK', 'RCB', 'MI', 'LSG']

// splice is used to delete the element in array or add element
// splice take 4 arguments
console.log(teams);
console.log(teams.splice(2,0,"GT"));// returns empty array
// index deletecount insertvalue
console.log(teams);

// Note slice gives you a copy of sliced values
// Note splice gives you empty array it gives nothing


// concat()
// concat is just like slice 
// which returns a shallow copy and does not
//  effect the origanal array
const teams2 = ["India","Australia","New Zealand"];
const mergedteams =teams.concat(teams2);
console.log(mergedteams);
