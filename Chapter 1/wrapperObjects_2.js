let num = 10;
let str = 'String';
let bigNum = 10n;
let bool = true;

// null and undefined does not have wrapper objects
console.log(num.__proto__);
console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);