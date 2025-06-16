'use strict'

// this in global space
console.log(this);

// this inside a function

function x(){
    console.log(this);// without strict mode the value of this is undefined and this will replace null and undefined with window object this process is called this substitution


}

x();


// this in class and constructor

class sample{

   

    constructor(){
         console.log(this);
         this.value = 20;
         console.log(this);
    }

     getdetails(){
        this.value1 = 30;
    }

}


const object1 =  new sample();

object1.getdetails();


 