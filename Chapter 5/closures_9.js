// closure is a combination of lexical scope and function

let a = 'Global';

function outerPrint() {
  let b = 'OuterPrint';

  return function innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${b} -> ${c}`;
  };
}
const show = outerPrint();
console.log(show);
const printInner = show();
console.log(printInner);

// you can call a function
// like this also
// return functionname;


// js run time environment (chrome has js engine internally)
// 1. JS Engine has call stack and meomary heap
// in meomary heap arrays and function and objects get save in creation phase

// js engine is runned inside the jre 

 //                                            jre
 //          js engine                                                web api(apllication program interface) like aleart, confirm and prompt
 //  call stack  meamory heap                                                          
 //                                                                   call back queue
 //                                            Event Loop