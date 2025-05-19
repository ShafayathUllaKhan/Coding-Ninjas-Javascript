// oop
// 1. Inheritance
// 2. polymorphism
// 3. class & Instances
// 4. Encapsulation
// 5. Abstraction

//class is a syntactic sugar over construction function

// constructor function

function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    // this.getDetails = function(){
    //     console.log(`The ${this.name} is ${this.color} in color.
    //         It has ${wheels} wheels`);
    // }
}

// using prototype

Vehicle.prototype.getDetails = function(){
     console.log(`The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels`);
}
// this creating of prototype is easy in class as in class method
// is auto prototype

// new key word work
// create an object
// bind 'this' to object
// // return an object


const car = new Vehicle('car', 'blue', 4);
console.log(car.hasOwnProperty('getDetails'));
car.getDetails();


//Classes in js
// class expression
// classes work on strict mode only and classes are not hoisted

const Vehicle1 = class{

}


// class declaration
class VehicleCl{
    // properties
    // this will not give error you keep it or remove it
    name;
    color;
    wheels;
    // constructor
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }
    // methods
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels`);
    }
}

const veh1 = new VehicleCl('car', 'blue', 4);
console.log(veh1);
console.log(veh1.getDetails());
// point to remamber getDetails is not in veh1 object 
// it is there in class prototype it is not creating 
// copies of function

console.log(veh1.hasOwnProperty('name'));// true
console.log(veh1.hasOwnProperty('getDetails'));// false

