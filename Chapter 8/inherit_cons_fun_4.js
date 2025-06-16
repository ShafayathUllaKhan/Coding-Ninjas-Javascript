function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function ()
 {
  console.log(
    `Name: ${this.name}\nColor:
     ${this.color}\nWheels: ${this.wheels}`
  );
};

function Car(name,color,wheels, brand, seats) {
  Vehicle.call(this,name,color,wheels);
  this.brand = brand;
  this.seats = seats;
}
Car.prototype = Object.create(Vehicle.prototype);
 Car.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name}
       is of ${this.brand} company.
      It has seating for ${this.seats} 
      people`);
};

let car1 = new Car('audi','red',4,'audi','4 seater');
console.log(car1.name);
console.log(car1.color);
console.log(car1.wheels);
console.log(car1.brand);
console.log(car1.seats);
console.log(car1.seats);
car1.getVehDetails();
car1.getDetails();
console.log(car1);
console.log(car1.__proto__);

car1 = Object.create(Vehicle.prototype);
console.log(car1);

// so the basic difference in car.prototype is car is a function constructor
// so you have to give car.prototype and for object 
// you can give car = Object.create(Vehicle.prototype);


// protected 
// child class will get public methods from parent protedted methods
class sampleofprotected{
    _variable = 10;

    _functionofprotected(){
      console.log('protected functiopn');
    }
}

const object1 = new sampleofprotected();


console.log(object1._variable);
object1._functionofprotected();

class sample1 extends sampleofprotected{
   
}

const object2 = new sample1();
console.log(object2._variable);
object2._functionofprotected();
