/** Scope in JS */

// Global
// Function(Local)
// Block

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = 'ten';
  let b = 'twenty';

  console.log('***** Inside print Function*****');
  console.log(a, b, c); // 'ten' 'twenty' 30
  console.log('***** *****');

  function innerPrint() {
    var a = 'inner10';
    console.log('*Inside innerPrint Function*');
    console.log(a, b, c); // 'inner10' 'twenty' 30
  }
  innerPrint();
}

print();
console.log(a, b, c);// 10 20 30 
