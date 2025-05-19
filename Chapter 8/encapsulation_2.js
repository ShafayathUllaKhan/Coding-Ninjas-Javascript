class VehicleCl{
    // properties
    // this will not give error you keep it or remove it
   #regNumber;
    // constructor
    constructor(name,color,wheels,number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number
    }
    // private method
    #getNumber(number){
        return number;

    }
    // methods
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels.
            The registration number is : ${this.#getNumber(this.#regNumber)}`);
    }
}

const veh1 = new VehicleCl('car', 'blue', 4,8866);
console.log(veh1);

veh1.name = "Car";
//veh1.#regNumber = 2233; // Uncaught SyntaxError: Private field '#regNumber' must be declared in an enclosing class (at encapsulation_2.js:24:5)
veh1.getDetails();
//console.log(veh1.#regNumber); // Uncaught SyntaxError: Private field '#regNumber' must be declared in an enclosing class (at encapsulation_2.js:26:17)
// private properties can not access outside the class and cannot change outside the class

veh1.#getNumber();// Uncaught SyntaxError: Private field '#getNumber' must be declared in an enclosing class (at encapsulation_2.js:34:5)
