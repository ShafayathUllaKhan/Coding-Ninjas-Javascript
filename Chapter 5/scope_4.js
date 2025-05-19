
// scope in js

// Global
// Function(Local)
// Block

var varnum = 10;
let letnum = 20;
const constnum = 30;

function print(){ 
    var varlocal = 10;
    let letlocal = 20;
    const constlocal = 30;

    console.log(varlocal, letlocal, constlocal);
    console.log(varnum, letnum, constnum);
}

print();
console.log(varnum, letnum, constnum);
 console.log(varlocal, letlocal, constlocal);