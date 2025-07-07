// built in class

const today = new Date();

console.log(today); // Tue May 20 2025 21:57:35 GMT+0530 (India Standard Time)

const birtdate = new Date('1999-06-12');
console.log(birtdate); // Sat Jun 12 1999 05:30:00 GMT+0530 (India Standard Time)

const someDay = new Date(1990, 0o7);
console.log(someDay);// Wed Aug 01 1990 00:00:00 GMT+0530 (India Standard Time)
//july should be printed month work as index value

console.log(birtdate.getFullYear()); // 1999
// type will be number

console.log(birtdate.toDateString());// Sat Jun 12 1999
const birthStr = birtdate.toString();
console.log(birthStr.slice(11,20));


// json
// javascript object notation

// shallow copy

//point to remember object and array pass by ref and primitivt pass by value

const user1 = {
  username: 'Sara',
  age: 12,
  marks:{
    maths:20,
    eng:25
  }

  };

//Deep Copy and shallow Copy

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Object.assign
const user2 = Object.assign({}, user1);
console.log(user2);
console.log(user1);

user2.username = 'Harry';
user2.marks.maths = 10;
console.log(user2);
console.log(user1);

// Deep Copy

const user1 = {
  username: 'Sara',
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
  getMarks() {
    console.log(this.marks);
  },
};
//Deep Copy and shallow Copy

//Deep Copy can be done by using only below method

const user2 = JSON.parse(JSON.stringify(user1));

user2.username = 'Harry';
user2.marks.maths = 10;
console.log(user2);
console.log(user1);



// shallow copy 

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Object.assign
// const user2 = Object.assign({}, user1);
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// user2.marks.maths = 10;
// console.log(user2);
// console.log(user1);

