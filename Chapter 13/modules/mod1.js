import { obj } from "./mod2";
// whenever named export {} is needed
import { add } from "./mod2";

//import { obj,add } from "./mod2"; this way is also possible

import { obj as obj1 ,add } from "./mod2";

//import * as something from './mod2.js';

// import a from "./mod2";// in default no {} and name can be anything

import app from "./mod2";// second way of default import

import app,{ obj as obj1 ,add } from "./mod2";// combination of default and named


console.log(app);
console.log(a);

//console.log(something);// object with add function and all from mod2
console.log(obj1);
console.log(add(2,3));
