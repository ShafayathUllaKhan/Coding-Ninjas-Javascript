// Prototype
// js is prototype based language

function Movie(title){
    // console.log(this); // Movie {}
    this.title = title;
    // this.getDetails = function(){
    //     console.log(`Title: ${this.title}`);
    // }
    
}

Movie.prototype.getDetails = function (){
    console.log(`Title: ${this.title}`);
}// very usefull topic

const movie1 = new Movie("avengers");

movie1.year = 2012;
console.log(movie1);

const movie2 = new Movie("avenger");
console.log(movie2);

// prototype checking
console.log(movie1.__proto__);
console.log(movie1.__proto__.__proto__);
console.log(movie2.__proto__.__proto__);

// prototype inheritance
// movie1 --> Movie --> object
// and movie1 can acces Movie and object functions 
// this is called prototype inheritance



// Prototype Chain
console.log(movie2.__proto__.__proto__.__proto__);

// object with object literal for checking prototype of object

const sampleobject = {
    title : 'avengers'
}

function sampleobjectfunction(title){
    return {
        title:title
    }
}

const ab = sampleobjectfunction("avatar");
sampleobjectfunction.prototype.year = 2012;
console.log(ab.year);



console.log(sampleobject.__proto__);// // object {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter

// there are three ways to create object
// 1. object literal and the proto is object
// 2. factory function and the proto is object
// 3. by using constructor and the proto is consructor and the object


// you can use this
//Object.getPrototypeOf(sampleobject); it will give only one level upper prototype


// Arrays Prototype
// note map and all this function are in array prototype
const inputs = [4,5,6,7];

console.log(inputs.__proto__); // array constructor

console.log(inputs.__proto__.__proto__); // object


// object.create
// a new way of creating object
// so there are 4 types of object  creation
// 1. object literal
// 2. factory function
// 3. constructor
// 4. Object.create
const car={
    getcardetails(name){
        console.log(`Your car is ${name}`);
    }
}

console.log(car.__proto__);

const car1 = Object.create(car); // prototype has been copied and the car object please keep this in mind
console.log(car1.__proto__); // {getcardetails: ƒ}
console.log(car1);// {}
car1.getcardetails("audi");

// Object.assign 
// Object is a constructor

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true



// call/apply/bind methods
// this method are used to access methods of some other object

const sample1 ={
    name:"shafayath",
    age: "28",
    work(designation, role){
        console.log(`Shafayath designation ${designation} and role is ${designation}`);
    }
}

const sample2 ={
    name:"rahul",
    age: 28
}

sample1.work.call(sample2,"software Engineer", "developer");
sample1.work.apply(sample2,["software Engineer", "developer"]);
const sample3 = sample1.work.bind(sample2);
sample3("software Engineer", "developer");
sample3("software Engineer", "developer");
sample3("software Engineer", "developer");

// object destructing
//is a way to unpack multiple values

const obj = {
    a:1,
    b:2,
    c:['O','B','j'],
    d: {value: 'val'}
}

// first way to destructure known as  binding pattern 
// const {a,c} = obj;// const a = obje.a
// console.log(a, c);

// second way to destructure 
const {a:a1} = obj;

console.log(a1);// 1
//console.log(a); // a is not defined

// third way to destructure is assignment pattern
let b;
({b:a} = obj);

console.log(a); // 2

// array destructure

const fruits = [
    'mango',
    'apple',
    'kiwi',
    'banana',
    'lichi',
    'berry'
];

// binding pattern

const [l, , ,s] = fruits;

console.log(l,s);// mango banana



const [q,w,...f]= fruits;

console.log(f);


// you can destructure like this also

const [as,er,...[,ba,li]] = fruits;

console.log(li);


// prototype understanding

const a = [1,2,3];

console.log(a.__proto__.__proto__);

class sample{
    a = 10;
    getdetails(){
        console.log(a);
    }
}

const obj1 = new sample();

console.log(obj1.__proto__.__proto__);



const str = 'str';

console.log(str.__proto__);
console.log(str.__proto__.__proto__.__proto__);


function sample1(){
    console.log(10);
}

// variable --> prototype --> prototype
// function and arrow --> prototype(native code)
// object --> just prototype
// factory function --> just parent protoype
// construction function --> you will be having 2 prototypes one of constructor and parent and methods are not in prototype
// class --> methods are in prototype --> object prototype
// Object.create(carmain); --> add method in new  prototype or create a new prototype and add nethod there 
// Object.assign() --> give you combined onject and will be having parent prototype

const carmain = {
    getdetials(){
        console.log(10);
    }
}

let cardup = {
   a:10
};

cardup = Object.create(carmain); // adds the method in new prototype and no constructor in that prototype and function also have a prototype of constructor named function and a parent object

//car1 prototye(the parent or the last object) will have car method no your understanding is wrong it create a new prototype and add there so after this you will be having 2 prototypes

console.log(cardup);


function objectsample(){
    return {
        a : 10,
        getdetails(){
            console.log(a);
        }
    }
}

const obj2 = objectsample();
console.log(obj2); // you will be having a(variable) and method and a parent prototype


function School(){
        this.a = 10,
        this.getdetails= function (){
            console.log(a);
        }
        console.log(this); // points to obj3 
}


const obj3 = new School();
console.log(obj3);// give you variable and method and protoype object were you will have consructor school and then the parent object

const target1 = {
    a : 10,
    getdetails(){
        console.log(a);
    }
}


const source1 = {
    a : 20,
    getdetails1(){
        console.log(a);
    }
}

const newobject = Object.assign(target1,source1);

console.log(newobject); // in this you will get a variable of 20 value and 2 methods and a parent prototype

// please focus on constructor class and function constructor have constructor so you will be having 2 prototypes one for constructor and one for parent who does have no constructor the constructor will be object and have only one prototype


// note constructor function method will have a prototype inside that there will be object prototype basically constructot function and class methods will have 2 prototypes