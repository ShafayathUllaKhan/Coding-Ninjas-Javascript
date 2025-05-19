// a = 10;
// console.log(a);

//console.log(a); // error not defined
//a = 10;

// console.log(a); // cannot access 'a' before initialization
// let a = 10; // this concept is tdz

let a = 10;
{
    
    console.log(a);// cannot access 'a' before initialization
    let a = 10;
}
